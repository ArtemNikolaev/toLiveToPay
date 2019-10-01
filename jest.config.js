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
			"branches": 60,
			"functions": 40,
			"lines": 70,
			"statements": 60,
		},
	},
	displayName: {
		name: `${name}: ${version}`,
		color: 'lightblue',
	},
	preset: "rollup-jest",
}
