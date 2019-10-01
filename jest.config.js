const { name, version } = require('./package.json');

module.exports = {
  automock: false,
	clearMocks: true,
	collectCoverage: true,
	coveragePathIgnorePatterns: [
		"/node_modules/",
		"/coverage/",
		"/*.config.js",
		"/public/",
	],
	coverageThreshold: {
		"global": {
			"branches": 40,
			"functions": 40,
			"lines": 40,
			"statements": 40,
		},
	},
	displayName: {
		name: `${name}: ${version}`,
		color: 'lightblue',
	},
	preset: "rollup-jest",
}
