module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
	});
    
    
    
    
    
    
	// Register Grunt tasks
	grunt.registerTask('default', ['watch']);
};