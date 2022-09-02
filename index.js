module.exports = {
	extends: [
		'@antfu',
		'plugin:cypress/recommended',
		'plugin:import/recommended',
		'plugin:md/recommended',
		'plugin:yml/standard',
		'plugin:yml/prettier',
	],
	rules: {
		'@typescript-eslint/no-inferrable-types': 'off',
		'vue/component-tags-order': [
			'error',
			{
				order: ['template', 'script', 'style'],
			},
		],
		'vue/attributes-order': 'off',
		'prefer-const': 'off',
		'no-console': 'off',
		'import/no-unresolved': 'off',
	},
}