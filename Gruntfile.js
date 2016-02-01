module.exports = function(grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jst: {
      compile: {
        options: {
          processName: function (path) {
            return path.split('/').pop().split('.html').shift();
          }
        },
        files: {
          './public/javascripts/templates.js': ['./src/templates/*.html']
        }
      }
    },
    coffee: {
      compile: {
        files: [{
            expand: true,
            cwd: 'src/coffee/',
            src: ['**/*.coffee'],
            dest: 'public/javascripts/',
            ext: '.js'
        }]
      }
    },
    esteWatch: {
      options: {
        dirs: ['./src/templates/**', './src/coffee/**/**'],
        livereload: {
          enabled: false,
          extentions: ['jst', 'coffee']
        }
      },
      'jst': function() { return 'jst'; },
      'coffee': function() { return 'coffee'; }
    }
  });

  grunt.registerTask('tmpl', ['jst']);
  grunt.registerTask('default', ['coffee','esteWatch']);
};
