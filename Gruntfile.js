module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {                  // Task 
    dist: {                   // Target 
      options: {              // Target options 
        sassDir: 'sass',
        cssDir: 'css/scr',
        environment: 'production',
      },
    },
    dev: {                    // Another target 
      options: {
        sassDir: 'sass',
        cssDir: 'css/scr',
        },
      },
    },
    concat: {
      all: {
        files: {
          'js/dist/main.js': ['src/main.js', 'scr/*.js'],
          'js/dist/functions.js': ['src/fuc/search.js', 'src/func/silde.js'],
          'css/dist/main.css' : ['scr/main.css', 'scr/*.css'],
        },
      },
    },
    jshint: {
      beforeconcat: ['src/*.js', 'src/func/*.js'],
      afterconcat: ['dist/*.js'],
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          'min.css/main.css': ['css/dist/*.css'],
        }],
      },
    },
    uglify: {
    options: {
      mangle: {
        except: ['jQuery', 'Backbone'],
        },
      },
    my_target: {
      files: {
        'min.js/main.js': ['js/dist/*.js'],
        },
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.registerTask('test',['compass','jshint','concat','cssmin','uglify','watch']);
};