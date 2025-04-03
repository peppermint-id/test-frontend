module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:astro/recommended",
		"plugin:prettier/recommended",
	],
	plugins: ["@typescript-eslint", "prettier", "astro"],
	overrides: [
		{
			files: ["*.astro"],
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
			},
			extends: ["plugin:astro/recommended"],
			rules: {
				"prettier/prettier": "error",
			},
		},
	],
	rules: {
		"prettier/prettier": "error",
		"@typescript-eslint/no-unused-vars": "warn",
	},
};
