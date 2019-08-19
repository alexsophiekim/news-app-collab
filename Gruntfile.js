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
          uglify: {
            my_target: {
              files: {
                'js/script.min.js': ['js/script.js']
              }
            }
          }

// SOPHIE STUFF HERE
///////////////////////////////////
// JOHN STUFF HERE

        });

        // load plugins here
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-uglify-es');

        // register tasks here
        grunt.registerTask('checkJS', ['jshint']);
        grunt.registerTask('minifyJS',['uglify']);

}
