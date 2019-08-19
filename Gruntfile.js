module.exports = function(grunt) {
// Do grunt-related things in here

// grunt configs


// SOPHIE STUFF HERE
///////////////////////////////////
// JOHN STUFF HERE
    grunt.initConfig({
        csslint: {
          strict: {
            options: {
              import: 2
            },
            src: ['css/*.css']
          },
          lax: {
            options: {
              import: false
            },
            src: ['css/*.css']
          }
        },
        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: 'css/',
              src: ['*.css', '!*.min.css'],
              dest: 'css/',
              ext: '.min.css'
            }]
          }
        }
    });

    // load plugins here
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    // register tasks here
    grunt.registerTask('lintCSS', ['csslint']);
    grunt.registerTask('minCSS', ['cssmin']);
    // combining two tasks in one
    grunt.registerTask('checkCSS', ['csslint', 'cssmin']);
}
