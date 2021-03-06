export function escape(identifier) {
	return identifier.replace(/(['\\])/g, "\\$1");
}

export function wrap(identifier) {
	return "'" + identifier + "'";
}

function createIdentifierSerializer(punctuators, keywords, whitespace_characters) {
	return function (identifier) {
		var i;
		var escaped = escape(identifier);

		for (i in whitespace_characters) {
			if (identifier.indexOf(whitespace_characters[i]) !== -1) {
				return wrap(escaped);
			}
		}
		for (i in punctuators) {
			if (identifier.indexOf(punctuators[i]) !== -1) {
				return wrap(escaped);
			}
		}
		for (i in keywords) {
			if (identifier === keywords[i]) {
				return wrap(escaped);
			}
		}
		return escaped !== identifier ? wrap(escaped) : identifier;
	};
}

export var serializeIdentifier = createIdentifierSerializer(
	[
		".",
		"[",
		"*",
		"]",
		"#"
	],
	[],
	[
		" ",
		"\t",
		"\n"
	]
);
