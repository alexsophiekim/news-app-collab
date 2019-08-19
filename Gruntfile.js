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
             },
             watch: {
               scripts: {
                 files: 'js/*.js',
                 tasks: ['jshint', 'uglify'],
                 options: {
                   interrupt: true,
                 },
               },
               styles: {
                 files: 'scss/style.scss',
                 tasks: ['sass', 'csslint', 'cssmin'],
                 options: {
                   interrupt: true,
                 },
               },
             },
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
        // ADD SASS
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-uglify-es');
        grunt.loadNpmTasks('grunt-contrib-csslint');
        grunt.loadNpmTasks('grunt-contrib-cssmin');
        grunt.loadNpmTasks('grunt-contrib-watch');

        // register tasks here
        // ADD SASS
        grunt.registerTask('checkJS', ['jshint']);
        grunt.registerTask('minifyJS',['uglify']);
        grunt.registerTask('compile', ['sass']);
        grunt.registerTask('lintCSS', ['csslint']);
        grunt.registerTask('minCSS', ['cssmin']);
        // combining two tasks in one
        grunt.registerTask('lintMinCSS', ['csslint', 'cssmin']);
        grunt.registerTask('doWatch', ['watch']);
}
