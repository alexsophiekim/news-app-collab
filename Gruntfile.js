module.exports = function(grunt) {
// Do grunt-related things in here

// grunt configs
        grunt.initConfig({
          jshint: {
              files: ['js/*.js', 'js/!*.min.js'],
              options: {
                  esversion: 6
              }
          },
// SOPHIE STUFF HERE
///////////////////////////////////
// JOHN STUFF HERE

        });

        // load plugins here
        grunt.loadNpmTasks('grunt-contrib-jshint');

        // register tasks here
        grunt.registerTask('checkJS', ['jshint']);
}
