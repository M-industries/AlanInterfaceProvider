Object.defineProperty(exports, "__esModule", { value: true });
/*global module, require, console, Buffer */
var net = require("net");
var decorator_manifest = require("./lib/api_configuration-manifest/types/manifest/decorator");
var decorator_interface = require("./lib/api_configuration/types/interface/decorator");
var decorator_interface_request = require("./lib/api_configuration/types/interface_request/decorator");
var decorator_interface_reply = require("./lib/api_configuration/types/interface_reply/decorator");
var serializer_interface_reply = require("./lib/api_configuration/types/interface_reply/serializer");
var decorator_application_protocol_shake = require("./lib/api_configuration/types/application_protocol_shake/decorator");
var serializer_application_protocol_shake = require("./lib/api_configuration/types/application_protocol_shake/serializer");
var decorator_application_protocol_notify = require("./lib/api_configuration/types/application_protocol_notify/decorator");
var serializer_application_protocol_notify = require("./lib/api_configuration/types/application_protocol_notify/serializer");
var decorator_application_protocol_hand = require("./lib/api_configuration/types/application_protocol_hand/decorator");
var decorator_application_protocol_invoke = require("./lib/api_configuration/types/application_protocol_invoke/decorator");
var readFilesFromZipArchive_1 = require("./lib/read-from-zip/readFilesFromZipArchive");
var stream_handler_1 = require("./lib/stream_handler");
var next_socket_id = 0;
var EXPECT_HAND = 1, EXPECT_INVOKE = 2;
function provideInterface(server_host, server_port, custom_project_package_path, createSubscriptionRequestHandler, commandRequestHandler, onClose, onServerError, onConsumerError) {
    var $interface, interface_hash;
    readFilesFromZipArchive_1.default(custom_project_package_path, function (package) {
        $interface = decorator_interface.decorate(JSON.parse(package["package"]["interface.alan.json"].toString("utf8")), {}, function (error) { throw new Error(error); });
        interface_hash = decorator_manifest.decorate(JSON.parse(package[".manifest"].toString("utf8")), {}, function (error) { throw new Error(error); }).properties.root
            .properties.type.cast("directory").properties.children.getEntry("interface.alan").properties.inode.properties.type.cast("file").properties.hash;
        var server = net.createServer(function (socket) {
            var id = next_socket_id;
            next_socket_id++;
            var connection_state = EXPECT_HAND;
            var connection_subscription;
            function notificationHandler(interface_reply) {
                socket.write(new Buffer(JSON.stringify(serializer_application_protocol_notify.serialize(decorator_application_protocol_notify.decorate({
                    "notification": JSON.stringify(serializer_interface_reply.serialize(decorator_interface_reply.decorate(interface_reply, {
                        "interface": $interface,
                        "request": connection_subscription
                    }, function (error) { throw new Error(error); })))
                }, {}, function (error) { throw new Error(error); }))), "utf8"));
                socket.write(new Buffer([0]));
            }
            var sh = stream_handler_1.create(function (raw_msg) {
                //console.log("-> provider:", raw_msg.toString());
                switch (connection_state) {
                    case EXPECT_HAND:
                        var hand_request = decorator_application_protocol_hand.decorate(JSON.parse(raw_msg.toString("utf8")), { "interface": $interface }, function (error) { throw new Error(error); });
                        if (hand_request.properties.interface_version !== interface_hash) {
                            socket.end();
                            console.error("Request \"hand\":\"interface version\"(" + hand_request.properties.interface_version + ") !== \"providing interface hash\"(" + interface_hash + "): socket closed.");
                            return;
                        }
                        socket.write(new Buffer(JSON.stringify(serializer_application_protocol_shake.serialize(decorator_application_protocol_shake.decorate({}, {}, function (error) { throw new Error(error); }))), "utf8"));
                        socket.write(new Buffer([0]));
                        hand_request.properties.subscribe.switch({
                            "no": null,
                            "yes": function (yes__subscribe) {
                                var subscription_request_string = yes__subscribe.properties.subscription;
                                connection_subscription = decorator_interface_request.decorate(JSON.parse(subscription_request_string), { "interface": $interface }, function (error) { throw new Error(error); });
                                createSubscriptionRequestHandler(id.toString(), connection_subscription, notificationHandler, $interface);
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
}
exports.provideInterface = provideInterface;
;
