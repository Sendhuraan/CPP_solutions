(function() {

	var solution = {
		node: {
			lint: {
				pattern: ['*.cpp', 'math-functions/**/*.cpp', 'math-functions/**/*.h'],
				options: 'defaultLintOptions'
			},
			test: false,
			bundle: {
				compiler: {
					name: 'clang',
					options: '-Wall'
				},
				entry: 'index.cpp',
				files: ['math-functions/**/*.cpp'],
				output: {
					file: 'index.exe'
				}
			}
		},
		browser: false,
		dirs: {
			node: ['math-functions'],
			browser: false,
			output: 'output',
			development: 'workstation',
			deploy: 'deploy'
		}
	};

	var publicAPI = {
		solution
	};

	module.exports = publicAPI;
	
})();
