module.exports = function(grunt) {
	

	grunt.initConfig({
	  
		pkg: grunt.file.readJSON('package.json'),
		less: {
		development: {
			options: {
			compress: true,
			yuicompress: true,
			optimization: 2
			},
			files: {
				"www/css/gen/app.min.css": "less/app.less" // destination file and source file
			}
		}
		},
		watch: {
			styles: {
				files:	['less/app.less'], 
				tasks: ['less'],
				options: {
					debounceDelay: 500,
					atBegin: true,
					livereload: true
				}
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	  
	grunt.registerTask('default', ['less', 'watch']);
  
};