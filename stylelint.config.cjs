module.exports = {
	extends: ["stylelint-config-standard"],
	plugins: ["stylelint-order"],
	rules: {
		"selector-class-pattern": null,
		// "order/properties-alphabetical-order": true,
		"order/properties-order": [
			[
				"position",
				"top",
				"right",
				"bottom",
				"left",
				"z-index",
				"display",
				"flex-direction",
				"gap",
				"width",
				"margin",
				"padding",
				"background",
				"color",
				"border",
				"box-shadow",
			],
			{ unspecified: "bottomAlphabetical" },
		],
	},
};
