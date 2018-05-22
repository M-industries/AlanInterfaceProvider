/*global module, require, console, Buffer */
var net = require("net");

import * as decorator_manifest from "./lib/api_configuration-manifest/types/manifest/decorator";
import * as decorator_interface from "./lib/api_configuration/types/interface/decorator";
import * as decorator_interface_request from "./lib/api_configuration/types/interface_request/decorator";
import * as api_interface_request from "./lib/api_configuration/types/interface_request/read_api";
import * as api_interface from "./lib/api_configuration/types/interface/read_api";
import * as decorator_interface_reply from "./lib/api_configuration/types/interface_reply/decorator";
var serializer_interface_reply = require("./lib/api_configuration/types/interface_reply/serializer");
import * as decorator_application_protocol_shake from "./lib/api_configuration/types/application_protocol_shake/decorator";
var serializer_application_protocol_shake = require("./lib/api_configuration/types/application_protocol_shake/serializer");
import * as decorator_application_protocol_notify from "./lib/api_configuration/types/application_protocol_notify/decorator";
var serializer_application_protocol_notify = require("./lib/api_configuration/types/application_protocol_notify/serializer");
import * as decorator_application_protocol_hand from "./lib/api_configuration/types/application_protocol_hand/decorator";
import * as decorator_application_protocol_invoke from "./lib/api_configuration/types/application_protocol_invoke/decorator";

import {default as readFiles} from "./lib/read-from-zip/readFilesFromZipArchive";
import {create as stream_handler_create} from "./lib/stream_handler";

var next_socket_id = 0;
var EXPECT_HAND = 1, EXPECT_INVOKE = 2;

export function provideInterface(
	server_host,
	server_port,
	custom_project_package_path,
	createSubscriptionRequestHandler:(
		id:string,
		subscription_request:api_interface_request.Cinterface_request,
		sendInterfaceReply:(interface_reply:any) => void,
		$interface:api_interface.Cinterface
	) => void,
	commandRequestHandler:(
		id:string,
		command_request:api_interface_request.Cinterface_request,
		sendInterfaceReply:(interface_reply:any) => void,
		$interface:api_interface.Cinterface
	) => void,
	onClose:(id:string) => void,
	onServerError:(error:any) => void,
	onConsumerError:(id:string, error:any) => void
) {
	var $interface,
		interface_hash;

	readFiles(custom_project_package_path, function (package) {
		$interface = decorator_interface.decorate(JSON.parse(package["package"]["interface.alan.json"].toString("utf8")), {}, function (error) { throw new Error(error); });
		interface_hash = decorator_manifest.decorate(JSON.parse(package[".manifest"].toString("utf8")), {}, function (error) { throw new Error(error); }).properties.root
			.properties.type.cast("directory").properties.children.getEntry("interface.alan").properties.inode.properties.type.cast("file").properties.hash;

		let server = net.createServer(function (socket) {
			var id = next_socket_id;
			next_socket_id++;
			var connection_state = EXPECT_HAND;
			var connection_subscription;

			function notificationHandler(interface_reply) {
				socket.write(new Buffer(JSON.stringify(serializer_application_protocol_notify.serialize(decorator_application_protocol_notify.decorate({
					"notification": JSON.stringify(serializer_interface_reply.serialize(decorator_interface_reply.decorate(
						interface_reply,
						{
							"interface": $interface,
							"request": connection_subscription
						},
						function (error) { throw new Error(error); }
					)))
				}, {}, function (error) { throw new Error(error); }))), "utf8"));
				socket.write(new Buffer([ 0 ]));
			}

			var sh = stream_handler_create(function (raw_msg) {
				//console.log("-> provider:", raw_msg.toString());
				switch (connection_state) {
					case EXPECT_HAND:
						var hand_request = decorator_application_protocol_hand.decorate(
							JSON.parse(raw_msg.toString("utf8")),
							{ "interface": $interface },
							function (error) { throw new Error(error); }
						);
						if (hand_request.properties.interface_version !== interface_hash) {
							socket.end();
							console.error("Request \"hand\":\"interface version\"(" + hand_request.properties.interface_version + ") !== \"providing interface hash\"(" + interface_hash + "): socket closed.");
							return;
						}
						socket.write(new Buffer(JSON.stringify(serializer_application_protocol_shake.serialize(decorator_application_protocol_shake.decorate({}, {}, function (error) { throw new Error(error); }))), "utf8"));
						socket.write(new Buffer([ 0 ]));

						hand_request.properties.subscribe.switch({
							"no": null,
							"yes": function (yes__subscribe) {
								var subscription_request_string = yes__subscribe.properties.subscription;
								connection_subscription = decorator_interface_request.decorate(
									JSON.parse(subscription_request_string),
									{ "interface": $interface },
									function (error) { throw new Error(error); }
								);
								createSubscriptionRequestHandler(
									id.toString(),
									connection_subscription,
									notificationHandler,
									$interface
								);
							}
						});
						connection_state = EXPECT_INVOKE;
						break;
					case EXPECT_INVOKE:
						var invoke_request = decorator_application_protocol_invoke.decorate(JSON.parse(raw_msg.toString("utf8")), {}, function (error) { throw new Error(error); });
						var interface_request = decorator_interface_request.decorate(JSON.parse(invoke_request.properties.command), { "interface": $interface }, function (error) { throw new Error(error); });
						commandRequestHandler(id.toString(), interface_request, notificationHandler, $interface);
						break;
					default:
						onConsumerError(id.toString(), "Hmm");
						socket.end();
						break;
				}
			});

			socket.on("data", function (buffer) {
				sh(buffer);
			});
			socket.on("error", function (error) {
				onConsumerError(id.toString(), error);
			});
			socket.on("close", function () {
				onClose(id.toString());
			});
		}).listen(server_port, "127.0.0.1");
		server.on("error", function (error) {
			server.close();
			onServerError(error);
		});
	});
};
