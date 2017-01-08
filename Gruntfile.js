module.exports = function (grunt) {
  grunt.initConfig({
    copy: {
      Theme: {
        expand: true,
        cwd: 'dist/',
        src: '**',
        dest: '/usr/share/nginx/html/mock/'
      },
    },
    browserify: {
      dist:{
        files: {
          'dist/bundle.js': ['dist/entry.js'],
        },
        options: {
          transform: [
            'vueify'
          ],
        },
      },
    },
    watch: {
      babelOnly: {
        files: ['src/**/*.js'],
        tasks: ['babel']
      },
      pugOnly: {
        files: ['src/**/*.pug'],
        tasks: ['pug']
      },
      VUEOnly: {
        files: ['src/**/*.vue'],
        tasks: ['copy','browserify']
      }
    }
  });
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['babel', 'copy','browserify','watch']); 
};

