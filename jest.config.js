const { name, version } = require('./package.json');

module.exports = {
	clearMocks: true,
	collectCoverage: true,
	collectCoverageFrom: [
		"**/*.{js, svelte}",
	],
	coveragePathIgnorePatterns: [
		"/node_modules/",
		"/coverage/",
		"/*.config.js",
		"/public/",
	],
	coverageThreshold: {
		"global": {
			"branches": 100,
			"functions": 100,
			"lines": 100,
			"statements": 100,
		},
	},
	displayName: {
		name: `${name}: ${version}`,
		color: 'lightblue',
	},
	preset: "rollup-jest",
	transform: {
		'^.+\.svelte$': 'jest-transform-svelte',
	},
}