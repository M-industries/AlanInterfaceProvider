import * as read_api from "./read_api";
let serialize_delete_node = (
	function ($:read_api.Cdelete_node) { 
		if (!($ instanceof read_api.Cdelete_node)) { throw new Error("HMMM"); }
		let $_delete_node= $;
		var raw_data = {};
		return raw_data;
	}
);
let serialize_initialize_node = (
	function ($:read_api.Cinitialize_node) { 
		if (!($ instanceof read_api.Cinitialize_node)) { throw new Error("HMMM"); }
		let $_initialize_node= $;
		var raw_data = {};
		raw_data["properties"] = (function ($) {
			var k;
			var object = {};
			for (k in $_initialize_node.properties.properties["entries"]) {
				object[k] = (
					function ($:read_api.Cproperties__initialize_node) { 
						if (!($ instanceof read_api.Cproperties__initialize_node)) { throw new Error("HMMM"); }
						let $_properties__initialize_node= $;
						var raw_data = {};
						switch ($_properties__initialize_node.properties.type.state.name) {
							case 'collection':
								raw_data["type"] = [$_properties__initialize_node.properties.type.state.name, (
									function ($:read_api.Ccollection__type__properties__initialize_node) { 
										if (!($ instanceof read_api.Ccollection__type__properties__initialize_node)) { throw new Error("HMMM"); }
										let $_collection__type__properties__initialize_node= $;
										var raw_data = {};
										raw_data["entries"] = (function ($) {
											var k;
											var object = {};
											for (k in $_collection__type__properties__initialize_node.properties.entries["entries"]) {
												object[k] = (
													function ($:read_api.Centries__collection__type__properties__initialize_node) { 
														if (!($ instanceof read_api.Centries__collection__type__properties__initialize_node)) { throw new Error("HMMM"); }
														let $_entries__collection__type__properties__initialize_node= $;
														var raw_data = {};
														raw_data["node"] = serialize_initialize_node($_entries__collection__type__properties__initialize_node.properties.node);
														return raw_data;
													}
												($_collection__type__properties__initialize_node.properties.entries["entries"][k]));
											}
											return object;
										}($));
										switch ($_collection__type__properties__initialize_node.properties.type.state.name) {
											case 'dictionary':
												raw_data["type"] = [$_collection__type__properties__initialize_node.properties.type.state.name, (
													function ($:read_api.Cdictionary__type__collection__type__properties__initialize_node) { 
														if (!($ instanceof read_api.Cdictionary__type__collection__type__properties__initialize_node)) { throw new Error("HMMM"); }
														let $_dictionary__type__collection__type__properties__initialize_node= $;
														var raw_data = {};
														return raw_data;
													}
												(<any>$_collection__type__properties__initialize_node.properties.type.state.node))];
												break;
											case 'matrix':
												raw_data["type"] = [$_collection__type__properties__initialize_node.properties.type.state.name, (
													function ($:read_api.Cmatrix__type__collection__type__properties__initialize_node) { 
														if (!($ instanceof read_api.Cmatrix__type__collection__type__properties__initialize_node)) { throw new Error("HMMM"); }
														let $_matrix__type__collection__type__properties__initialize_node= $;
														var raw_data = {};
														return raw_data;
													}
												(<any>$_collection__type__properties__initialize_node.properties.type.state.node))];
												break;
											default:
												throw new Error('Hmmm');
										}
										return raw_data;
									}
								(<any>$_properties__initialize_node.properties.type.state.node))];
								break;
							case 'component':
								raw_data["type"] = [$_properties__initialize_node.properties.type.state.name, (
									function ($:read_api.Ccomponent__type__properties__initialize_node) { 
										if (!($ instanceof read_api.Ccomponent__type__properties__initialize_node)) { throw new Error("HMMM"); }
										let $_component__type__properties__initialize_node= $;
										var raw_data = {};
										raw_data["node"] = serialize_initialize_node($_component__type__properties__initialize_node.properties.node);
										return raw_data;
									}
								(<any>$_properties__initialize_node.properties.type.state.node))];
								break;
							case 'file':
								raw_data["type"] = [$_properties__initialize_node.properties.type.state.name, (
									function ($:read_api.Cfile__type__properties__initialize_node) { 
										if (!($ instanceof read_api.Cfile__type__properties__initialize_node)) { throw new Error("HMMM"); }
										let $_file__type__properties__initialize_node= $;
										var raw_data = {};
										raw_data["extension"] = $_file__type__properties__initialize_node.properties.extension;
										raw_data["token"] = $_file__type__properties__initialize_node.properties.token;
										return raw_data;
									}
								(<any>$_properties__initialize_node.properties.type.state.node))];
								break;
							case 'group':
								raw_data["type"] = [$_properties__initialize_node.properties.type.state.name, (
									function ($:read_api.Cgroup__type__properties__initialize_node) { 
										if (!($ instanceof read_api.Cgroup__type__properties__initialize_node)) { throw new Error("HMMM"); }
										let $_group__type__properties__initialize_node= $;
										var raw_data = {};
										raw_data["node"] = serialize_initialize_node($_group__type__properties__initialize_node.properties.node);
										return raw_data;
									}
								(<any>$_properties__initialize_node.properties.type.state.node))];
								break;
							case 'number':
								raw_data["type"] = [$_properties__initialize_node.properties.type.state.name, (
									function ($:read_api.Cnumber__type__properties__initialize_node) { 
										if (!($ instanceof read_api.Cnumber__type__properties__initialize_node)) { throw new Error("HMMM"); }
										let $_number__type__properties__initialize_node= $;
										var raw_data = {};
										switch ($_number__type__properties__initialize_node.properties.type.state.name) {
											case 'integer':
												raw_data["type"] = [$_number__type__properties__initialize_node.properties.type.state.name, (
													function ($:read_api.Cinteger__type__number__type__properties__initialize_node) { 
														if (!($ instanceof read_api.Cinteger__type__number__type__properties__initialize_node)) { throw new Error("HMMM"); }
														let $_integer__type__number__type__properties__initialize_node= $;
														var raw_data = {};
														raw_data["value"] = $_integer__type__number__type__properties__initialize_node.properties.value;
														return raw_data;
													}
												(<any>$_number__type__properties__initialize_node.properties.type.state.node))];
												break;
											case 'natural':
												raw_data["type"] = [$_number__type__properties__initialize_node.properties.type.state.name, (
													function ($:read_api.Cnatural__type__number__type__properties__initialize_node) { 
														if (!($ instanceof read_api.Cnatural__type__number__type__properties__initialize_node)) { throw new Error("HMMM"); }
														let $_natural__type__number__type__properties__initialize_node= $;
														var raw_data = {};
														raw_data["value"] = $_natural__type__number__type__properties__initialize_node.properties.value;
														return raw_data;
													}
												(<any>$_number__type__properties__initialize_node.properties.type.state.node))];
												break;
											default:
												throw new Error('Hmmm');
										}
										return raw_data;
									}
								(<any>$_properties__initialize_node.properties.type.state.node))];
								break;
							case 'reference':
								raw_data["type"] = [$_properties__initialize_node.properties.type.state.name, (
									function ($:read_api.Creference__type__properties__initialize_node) { 
										if (!($ instanceof read_api.Creference__type__properties__initialize_node)) { throw new Error("HMMM"); }
										let $_reference__type__properties__initialize_node= $;
										var raw_data = {};
										raw_data["referenced node"] = $_reference__type__properties__initialize_node.properties.referenced_node;
										return raw_data;
									}
								(<any>$_properties__initialize_node.properties.type.state.node))];
								break;
							case 'state group':
								raw_data["type"] = [$_properties__initialize_node.properties.type.state.name, (
									function ($:read_api.Cstate_group__type__properties__initialize_node) { 
										if (!($ instanceof read_api.Cstate_group__type__properties__initialize_node)) { throw new Error("HMMM"); }
										let $_state_group__type__properties__initialize_node= $;
										var raw_data = {};
										raw_data["node"] = serialize_initialize_node($_state_group__type__properties__initialize_node.properties.node);
										raw_data["state"] = $_state_group__type__properties__initialize_node.properties.state.entry;
										return raw_data;
									}
								(<any>$_properties__initialize_node.properties.type.state.node))];
								break;
							case 'text':
								raw_data["type"] = [$_properties__initialize_node.properties.type.state.name, (
									function ($:read_api.Ctext__type__properties__initialize_node) { 
										if (!($ instanceof read_api.Ctext__type__properties__initialize_node)) { throw new Error("HMMM"); }
										let $_text__type__properties__initialize_node= $;
										var raw_data = {};
										raw_data["value"] = $_text__type__properties__initialize_node.properties.value;
										return raw_data;
									}
								(<any>$_properties__initialize_node.properties.type.state.node))];
								break;
							default:
								throw new Error('Hmmm');
						}
						return raw_data;
					}
				($_initialize_node.properties.properties["entries"][k]));
			}
			return object;
		}($));
		return raw_data;
	}
);
let serialize_update_node = (
	function ($:read_api.Cupdate_node) { 
		if (!($ instanceof read_api.Cupdate_node)) { throw new Error("HMMM"); }
		let $_update_node= $;
		var raw_data = {};
		raw_data["properties"] = (function ($) {
			var k;
			var object = {};
			for (k in $_update_node.properties.properties["entries"]) {
				object[k] = (
					function ($:read_api.Cproperties__update_node) { 
						if (!($ instanceof read_api.Cproperties__update_node)) { throw new Error("HMMM"); }
						let $_properties__update_node= $;
						var raw_data = {};
						switch ($_properties__update_node.properties.type.state.name) {
							case 'collection':
								raw_data["type"] = [$_properties__update_node.properties.type.state.name, (
									function ($:read_api.Ccollection__type__properties__update_node) { 
										if (!($ instanceof read_api.Ccollection__type__properties__update_node)) { throw new Error("HMMM"); }
										let $_collection__type__properties__update_node= $;
										var raw_data = {};
										raw_data["entries"] = (function ($) {
											var k;
											var object = {};
											for (k in $_collection__type__properties__update_node.properties.entries["entries"]) {
												object[k] = (
													function ($:read_api.Centries__collection__type__properties__update_node) { 
														if (!($ instanceof read_api.Centries__collection__type__properties__update_node)) { throw new Error("HMMM"); }
														let $_entries__collection__type__properties__update_node= $;
														var raw_data = {};
														switch ($_entries__collection__type__properties__update_node.properties.type.state.name) {
															case 'create':
																raw_data["type"] = [$_entries__collection__type__properties__update_node.properties.type.state.name, (
																	function ($:read_api.Ccreate__type__entries) { 
																		if (!($ instanceof read_api.Ccreate__type__entries)) { throw new Error("HMMM"); }
																		let $_create__type__entries= $;
																		var raw_data = {};
																		raw_data["node"] = serialize_initialize_node($_create__type__entries.properties.node);
																		return raw_data;
																	}
																(<any>$_entries__collection__type__properties__update_node.properties.type.state.node))];
																break;
															case 'remove':
																raw_data["type"] = [$_entries__collection__type__properties__update_node.properties.type.state.name, (
																	function ($:read_api.Cremove__type__entries) { 
																		if (!($ instanceof read_api.Cremove__type__entries)) { throw new Error("HMMM"); }
																		let $_remove__type__entries= $;
																		var raw_data = {};
																		raw_data["delete node"] = serialize_delete_node($_remove__type__entries.properties.delete_node);
																		return raw_data;
																	}
																(<any>$_entries__collection__type__properties__update_node.properties.type.state.node))];
																break;
															case 'rename':
																raw_data["type"] = [$_entries__collection__type__properties__update_node.properties.type.state.name, (
																	function ($:read_api.Crename) { 
																		if (!($ instanceof read_api.Crename)) { throw new Error("HMMM"); }
																		let $_rename= $;
																		var raw_data = {};
																		raw_data["old id"] = $_rename.properties.old_id.entry;
																		return raw_data;
																	}
																(<any>$_entries__collection__type__properties__update_node.properties.type.state.node))];
																break;
															case 'update':
																raw_data["type"] = [$_entries__collection__type__properties__update_node.properties.type.state.name, (
																	function ($:read_api.Cupdate__type__entries) { 
																		if (!($ instanceof read_api.Cupdate__type__entries)) { throw new Error("HMMM"); }
																		let $_update__type__entries= $;
																		var raw_data = {};
																		switch ($_update__type__entries.properties.invalidate_referencer.state.name) {
																			case 'no':
																				raw_data["invalidate referencer"] = [$_update__type__entries.properties.invalidate_referencer.state.name, (
																					function ($:read_api.Cno__invalidate_referencer) { 
																						if (!($ instanceof read_api.Cno__invalidate_referencer)) { throw new Error("HMMM"); }
																						let $_no__invalidate_referencer= $;
																						var raw_data = {};
																						return raw_data;
																					}
																				(<any>$_update__type__entries.properties.invalidate_referencer.state.node))];
																				break;
																			case 'yes':
																				raw_data["invalidate referencer"] = [$_update__type__entries.properties.invalidate_referencer.state.name, (
																					function ($:read_api.Cyes__invalidate_referencer) { 
																						if (!($ instanceof read_api.Cyes__invalidate_referencer)) { throw new Error("HMMM"); }
																						let $_yes__invalidate_referencer= $;
																						var raw_data = {};
																						return raw_data;
																					}
																				(<any>$_update__type__entries.properties.invalidate_referencer.state.node))];
																				break;
																			default:
																				throw new Error('Hmmm');
																		}
																		raw_data["update node"] = serialize_update_node($_update__type__entries.properties.update_node);
																		return raw_data;
																	}
																(<any>$_entries__collection__type__properties__update_node.properties.type.state.node))];
																break;
															default:
																throw new Error('Hmmm');
														}
														return raw_data;
													}
												($_collection__type__properties__update_node.properties.entries["entries"][k]));
											}
											return object;
										}($));
										switch ($_collection__type__properties__update_node.properties.type.state.name) {
											case 'dictionary':
												raw_data["type"] = [$_collection__type__properties__update_node.properties.type.state.name, (
													function ($:read_api.Cdictionary__type__collection__type__properties__update_node) { 
														if (!($ instanceof read_api.Cdictionary__type__collection__type__properties__update_node)) { throw new Error("HMMM"); }
														let $_dictionary__type__collection__type__properties__update_node= $;
														var raw_data = {};
														return raw_data;
													}
												(<any>$_collection__type__properties__update_node.properties.type.state.node))];
												break;
											case 'matrix':
												raw_data["type"] = [$_collection__type__properties__update_node.properties.type.state.name, (
													function ($:read_api.Cmatrix__type__collection__type__properties__update_node) { 
														if (!($ instanceof read_api.Cmatrix__type__collection__type__properties__update_node)) { throw new Error("HMMM"); }
														let $_matrix__type__collection__type__properties__update_node= $;
														var raw_data = {};
														return raw_data;
													}
												(<any>$_collection__type__properties__update_node.properties.type.state.node))];
												break;
											default:
												throw new Error('Hmmm');
										}
										return raw_data;
									}
								(<any>$_properties__update_node.properties.type.state.node))];
								break;
							case 'component':
								raw_data["type"] = [$_properties__update_node.properties.type.state.name, (
									function ($:read_api.Ccomponent__type__properties__update_node) { 
										if (!($ instanceof read_api.Ccomponent__type__properties__update_node)) { throw new Error("HMMM"); }
										let $_component__type__properties__update_node= $;
										var raw_data = {};
										raw_data["update node"] = serialize_update_node($_component__type__properties__update_node.properties.update_node);
										return raw_data;
									}
								(<any>$_properties__update_node.properties.type.state.node))];
								break;
							case 'file':
								raw_data["type"] = [$_properties__update_node.properties.type.state.name, (
									function ($:read_api.Cfile__type__properties__update_node) { 
										if (!($ instanceof read_api.Cfile__type__properties__update_node)) { throw new Error("HMMM"); }
										let $_file__type__properties__update_node= $;
										var raw_data = {};
										raw_data["new extension"] = $_file__type__properties__update_node.properties.new_extension;
										raw_data["new token"] = $_file__type__properties__update_node.properties.new_token;
										return raw_data;
									}
								(<any>$_properties__update_node.properties.type.state.node))];
								break;
							case 'group':
								raw_data["type"] = [$_properties__update_node.properties.type.state.name, (
									function ($:read_api.Cgroup__type__properties__update_node) { 
										if (!($ instanceof read_api.Cgroup__type__properties__update_node)) { throw new Error("HMMM"); }
										let $_group__type__properties__update_node= $;
										var raw_data = {};
										raw_data["update node"] = serialize_update_node($_group__type__properties__update_node.properties.update_node);
										return raw_data;
									}
								(<any>$_properties__update_node.properties.type.state.node))];
								break;
							case 'number':
								raw_data["type"] = [$_properties__update_node.properties.type.state.name, (
									function ($:read_api.Cnumber__type__properties__update_node) { 
										if (!($ instanceof read_api.Cnumber__type__properties__update_node)) { throw new Error("HMMM"); }
										let $_number__type__properties__update_node= $;
										var raw_data = {};
										switch ($_number__type__properties__update_node.properties.type.state.name) {
											case 'integer':
												raw_data["type"] = [$_number__type__properties__update_node.properties.type.state.name, (
													function ($:read_api.Cinteger__type__number__type__properties__update_node) { 
														if (!($ instanceof read_api.Cinteger__type__number__type__properties__update_node)) { throw new Error("HMMM"); }
														let $_integer__type__number__type__properties__update_node= $;
														var raw_data = {};
														raw_data["new value"] = $_integer__type__number__type__properties__update_node.properties.new_value;
														return raw_data;
													}
												(<any>$_number__type__properties__update_node.properties.type.state.node))];
												break;
											case 'natural':
												raw_data["type"] = [$_number__type__properties__update_node.properties.type.state.name, (
													function ($:read_api.Cnatural__type__number__type__properties__update_node) { 
														if (!($ instanceof read_api.Cnatural__type__number__type__properties__update_node)) { throw new Error("HMMM"); }
														let $_natural__type__number__type__properties__update_node= $;
														var raw_data = {};
														raw_data["new value"] = $_natural__type__number__type__properties__update_node.properties.new_value;
														return raw_data;
													}
												(<any>$_number__type__properties__update_node.properties.type.state.node))];
												break;
											default:
												throw new Error('Hmmm');
										}
										return raw_data;
									}
								(<any>$_properties__update_node.properties.type.state.node))];
								break;
							case 'reference':
								raw_data["type"] = [$_properties__update_node.properties.type.state.name, (
									function ($:read_api.Creference__type__properties__update_node) { 
										if (!($ instanceof read_api.Creference__type__properties__update_node)) { throw new Error("HMMM"); }
										let $_reference__type__properties__update_node= $;
										var raw_data = {};
										raw_data["new referenced node"] = $_reference__type__properties__update_node.properties.new_referenced_node;
										return raw_data;
									}
								(<any>$_properties__update_node.properties.type.state.node))];
								break;
							case 'state group':
								raw_data["type"] = [$_properties__update_node.properties.type.state.name, (
									function ($:read_api.Cstate_group__type__properties__update_node) { 
										if (!($ instanceof read_api.Cstate_group__type__properties__update_node)) { throw new Error("HMMM"); }
										let $_state_group__type__properties__update_node= $;
										var raw_data = {};
										raw_data["state"] = $_state_group__type__properties__update_node.properties.state.entry;
										switch ($_state_group__type__properties__update_node.properties.type.state.name) {
											case 'set':
												raw_data["type"] = [$_state_group__type__properties__update_node.properties.type.state.name, (
													function ($:read_api.Cset) { 
														if (!($ instanceof read_api.Cset)) { throw new Error("HMMM"); }
														let $_set= $;
														var raw_data = {};
														raw_data["delete node"] = serialize_delete_node($_set.properties.delete_node);
														raw_data["node"] = serialize_initialize_node($_set.properties.node);
														return raw_data;
													}
												(<any>$_state_group__type__properties__update_node.properties.type.state.node))];
												break;
											case 'update':
												raw_data["type"] = [$_state_group__type__properties__update_node.properties.type.state.name, (
													function ($:read_api.Cupdate__type__state_group) { 
														if (!($ instanceof read_api.Cupdate__type__state_group)) { throw new Error("HMMM"); }
														let $_update__type__state_group= $;
														var raw_data = {};
														raw_data["update node"] = serialize_update_node($_update__type__state_group.properties.update_node);
														return raw_data;
													}
												(<any>$_state_group__type__properties__update_node.properties.type.state.node))];
												break;
											default:
												throw new Error('Hmmm');
										}
										return raw_data;
									}
								(<any>$_properties__update_node.properties.type.state.node))];
								break;
							case 'text':
								raw_data["type"] = [$_properties__update_node.properties.type.state.name, (
									function ($:read_api.Ctext__type__properties__update_node) { 
										if (!($ instanceof read_api.Ctext__type__properties__update_node)) { throw new Error("HMMM"); }
										let $_text__type__properties__update_node= $;
										var raw_data = {};
										raw_data["new value"] = $_text__type__properties__update_node.properties.new_value;
										return raw_data;
									}
								(<any>$_properties__update_node.properties.type.state.node))];
								break;
							default:
								throw new Error('Hmmm');
						}
						return raw_data;
					}
				($_update_node.properties.properties["entries"][k]));
			}
			return object;
		}($));
		return raw_data;
	}
);
export var serialize = (
	function ($:read_api.Cinterface_reply) { 
		if (!($ instanceof read_api.Cinterface_reply)) { throw new Error("HMMM"); }
		let $_interface_reply= $;
		var raw_data = {};
		switch ($_interface_reply.properties.type.state.name) {
			case 'initialization':
				raw_data["type"] = [$_interface_reply.properties.type.state.name, (
					function ($:read_api.Cinitialization) { 
						if (!($ instanceof read_api.Cinitialization)) { throw new Error("HMMM"); }
						let $_initialization= $;
						var raw_data = {};
						switch ($_initialization.properties.has_initialization_data.state.name) {
							case 'no':
								raw_data["has initialization data"] = [$_initialization.properties.has_initialization_data.state.name, (
									function ($:read_api.Cno__has_initialization_data) { 
										if (!($ instanceof read_api.Cno__has_initialization_data)) { throw new Error("HMMM"); }
										let $_no__has_initialization_data= $;
										var raw_data = {};
										return raw_data;
									}
								(<any>$_initialization.properties.has_initialization_data.state.node))];
								break;
							case 'yes':
								raw_data["has initialization data"] = [$_initialization.properties.has_initialization_data.state.name, (
									function ($:read_api.Cyes__has_initialization_data) { 
										if (!($ instanceof read_api.Cyes__has_initialization_data)) { throw new Error("HMMM"); }
										let $_yes__has_initialization_data= $;
										var raw_data = {};
										switch ($_yes__has_initialization_data.properties.context_exists.state.name) {
											case 'no':
												raw_data["context exists"] = [$_yes__has_initialization_data.properties.context_exists.state.name, (
													function ($:read_api.Cno__context_exists) { 
														if (!($ instanceof read_api.Cno__context_exists)) { throw new Error("HMMM"); }
														let $_no__context_exists= $;
														var raw_data = {};
														return raw_data;
													}
												(<any>$_yes__has_initialization_data.properties.context_exists.state.node))];
												break;
											case 'yes':
												raw_data["context exists"] = [$_yes__has_initialization_data.properties.context_exists.state.name, (
													function ($:read_api.Cyes__context_exists) { 
														if (!($ instanceof read_api.Cyes__context_exists)) { throw new Error("HMMM"); }
														let $_yes__context_exists= $;
														var raw_data = {};
														raw_data["root"] = serialize_initialize_node($_yes__context_exists.properties.root);
														return raw_data;
													}
												(<any>$_yes__has_initialization_data.properties.context_exists.state.node))];
												break;
											default:
												throw new Error('Hmmm');
										}
										return raw_data;
									}
								(<any>$_initialization.properties.has_initialization_data.state.node))];
								break;
							default:
								throw new Error('Hmmm');
						}
						return raw_data;
					}
				(<any>$_interface_reply.properties.type.state.node))];
				break;
			case 'notification':
				raw_data["type"] = [$_interface_reply.properties.type.state.name, (
					function ($:read_api.Cnotification) { 
						if (!($ instanceof read_api.Cnotification)) { throw new Error("HMMM"); }
						let $_notification= $;
						var raw_data = {};
						switch ($_notification.properties.type.state.name) {
							case 'create':
								raw_data["type"] = [$_notification.properties.type.state.name, (
									function ($:read_api.Ccreate__type__notification) { 
										if (!($ instanceof read_api.Ccreate__type__notification)) { throw new Error("HMMM"); }
										let $_create__type__notification= $;
										var raw_data = {};
										raw_data["initialize node"] = serialize_initialize_node($_create__type__notification.properties.initialize_node);
										return raw_data;
									}
								(<any>$_notification.properties.type.state.node))];
								break;
							case 'remove':
								raw_data["type"] = [$_notification.properties.type.state.name, (
									function ($:read_api.Cremove__type__notification) { 
										if (!($ instanceof read_api.Cremove__type__notification)) { throw new Error("HMMM"); }
										let $_remove__type__notification= $;
										var raw_data = {};
										return raw_data;
									}
								(<any>$_notification.properties.type.state.node))];
								break;
							case 'update':
								raw_data["type"] = [$_notification.properties.type.state.name, (
									function ($:read_api.Cupdate__type__notification) { 
										if (!($ instanceof read_api.Cupdate__type__notification)) { throw new Error("HMMM"); }
										let $_update__type__notification= $;
										var raw_data = {};
										raw_data["update node"] = serialize_update_node($_update__type__notification.properties.update_node);
										return raw_data;
									}
								(<any>$_notification.properties.type.state.node))];
								break;
							default:
								throw new Error('Hmmm');
						}
						return raw_data;
					}
				(<any>$_interface_reply.properties.type.state.node))];
				break;
			default:
				throw new Error('Hmmm');
		}
		return raw_data;
	}
);