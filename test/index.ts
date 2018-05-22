/*global require, setTimeout */
let path = require("path");

// Error.stackTraceLimit = Infinity;

import {provideInterface} from "@m-industries/alan-interface-provider";
import {create as stream_handler_create} from "./node_modules/@m-industries/alan-interface-provider/lib/stream_handler";

let providing = {
	host: "127.0.0.1",
	port: "12345"
};

var command_received = false;
provideInterface(providing.host, providing.port, path.join(__dirname, "interface.pkg"), function createSubscriptionLessRequestHandler(id, $interface) {},
function createSubscriptionRequestHandler(id, subscription_request, notificationHandler, $interface) {
	notificationHandler({
		"type": ["initialization", {
			"has initialization data": ["yes", {
				"context exists": ["yes", {
					"root": {
						"properties": {
							"Printers": {
								"type": ["collection", {
									"entries": {
										"Phaser_1": { "node": { "properties": {} } },
										"Phaser_2": { "node": { "properties": {} } },
										"Phaser_3": { "node": { "properties": {} } },
										"Phaser_4": { "node": { "properties": {} } },
										"Phaser_5": { "node": { "properties": {} } },
										"Phaser_6": { "node": { "properties": {} } },
										"Phaser_7": { "node": { "properties": {} } }
									},
									"type": ["dictionary", {} ]
								}]
							}
						}
					}
				}]
			}]
		}]
	});
	notificationHandler({
		"type": ["notification", {
			"type": ["update", { "update node": {
				"properties": {
					"Printers": { "type": ["collection", { "type": ["dictionary", {}],
						"entries": { "NEW ENTRY": {
							"type": ["create", {
								"node": { "properties": {} }
							}]
						} }
					} ] }
				}
			} }]
		}]
	});
},
function commandRequestHandler(id, command_request, notificationHandler, $interface) {
	command_received = true;
}, function (id) {
	if (command_received === true) {
		console.log("Test success");
		process.exit(0);
	} else {
		console.error("Test FAILED");
		process.exit(1);
	}
}, function (server_error) {
	throw new Error(server_error);
}, function (id, consumer_error) {
	throw new Error(consumer_error);
});
setTimeout(function () {
	let client_consumer = require("net").createConnection(providing.port, providing.host, function (conn) {
		let sh = stream_handler_create(function (raw_msg) {
			// console.log("-> consumer: " + raw_msg.toString());
			switch (raw_msg.toString()) {
				case "{}":
					break;
				case "{\"notification\":\"{\\\"type\\\":[\\\"initialization\\\",{\\\"has initialization data\\\":[\\\"yes\\\",{\\\"context exists\\\":[\\\"yes\\\",{\\\"root\\\":{\\\"properties\\\":{\\\"Printers\\\":{\\\"type\\\":[\\\"collection\\\",{\\\"entries\\\":{\\\"Phaser_1\\\":{\\\"node\\\":{\\\"properties\\\":{}}},\\\"Phaser_2\\\":{\\\"node\\\":{\\\"properties\\\":{}}},\\\"Phaser_3\\\":{\\\"node\\\":{\\\"properties\\\":{}}},\\\"Phaser_4\\\":{\\\"node\\\":{\\\"properties\\\":{}}},\\\"Phaser_5\\\":{\\\"node\\\":{\\\"properties\\\":{}}},\\\"Phaser_6\\\":{\\\"node\\\":{\\\"properties\\\":{}}},\\\"Phaser_7\\\":{\\\"node\\\":{\\\"properties\\\":{}}}},\\\"type\\\":[\\\"dictionary\\\",{}]}]}}}}]}]}]}\"}":
					client_consumer.write(new Buffer("{\"command\":\"{\\\"type\\\":[\\\"command execution\\\",{\\\"arguments\\\":{\\\"properties\\\":{}},\\\"command\\\":\\\"Print Label\\\",\\\"context keys\\\":{\\\"context keys\\\":{}},\\\"context node\\\":{\\\"has steps\\\":[\\\"yes\\\",{\\\"tail\\\":{\\\"has steps\\\":[\\\"no\\\",{}]},\\\"type\\\":[\\\"collection entry\\\",{\\\"collection\\\":\\\"Printers\\\",\\\"id\\\":\\\"NEW ENTRY\\\"}]}]}}]}\"}"));  client_consumer.write(new Buffer([ 0 ]));
					break;
				case "{\"notification\":\"{\\\"type\\\":[\\\"notification\\\",{\\\"type\\\":[\\\"update\\\",{\\\"update node\\\":{\\\"properties\\\":{\\\"Printers\\\":{\\\"type\\\":[\\\"collection\\\",{\\\"entries\\\":{\\\"NEW ENTRY\\\":{\\\"type\\\":[\\\"create\\\",{\\\"node\\\":{\\\"properties\\\":{}}}]}},\\\"type\\\":[\\\"dictionary\\\",{}]}]}}}}]}]}\"}":
					client_consumer.end();
					break;
				default:
					throw new Error("Unexpected provider -> consumer message: " + raw_msg.toString());
			}
		});

		client_consumer.on("data", function (buffer) {
			sh(buffer);
		});

		client_consumer.write("{\"interface version\":\"2c9eb66daf5dc31c8ada41e92e4255ad124e0b6da114ef76cf50ec091d239217\",\"subscribe\":[\"yes\",{\"subscription\":\"{\\\"type\\\":[\\\"subscribe\\\",{\\\"context keys\\\":{\\\"context keys\\\":{}},\\\"initialization data requested\\\":[\\\"yes\\\",{}]}]}\"}]}"); client_consumer.write(new Buffer([ 0 ]));
	});
}, 1000);
