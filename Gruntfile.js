module.exports = function (grunt) {
  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015']
      },
      dist: {
        files: [
          {
            "expand": true,
            "cwd": "src/",
            "src": ["**/*.js"],
            "dest": "dist/",
            "ext": ".js"
          }
        ]
      }
    },
    stylus: {
      compile: {
        files: {
          'dist/global.css': 'src/global.styl'
        }
      },
    },
    copy: {
      Vue: {
        expand: true,
        cwd: 'src/components/',
        src: '**',
        dest: 'dist/components/'
      },
      css: {
        src: 'src/wordpress_head.css',
        dest: 'dist/wp_head.css'
      },
      php: {
        src: 'src/index.php',
        dest: 'dist/index.php'
      },
      phpfunction: {
        src: 'src/functions.php',
        dest: 'dist/functions.php'
      },
      theme: {
        expand: true,
        cwd: 'dist/',
        src: '**',
        dest: 'wordpress/wp-content/themes/sliceofperfect/'
      }
    },
    browserify: {
      dist:{
        files: {
          'dist/js/bundle.js': ['dist/entry.js'],
        },
        options: {
          transform: [
            'vueify'
          ],
        },
      },
    },
    concat: {
      main: {
        src: ['wordpress/wp-content/themes/sliceofperfect/wp_head.css','wordpress/wp-content/themes/sliceofperfect/global.css'],
        dest: 'wordpress/wp-content/themes/sliceofperfect/style.css'
      } 
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: 'wordpress/wp-content/themes/sliceofperfect/**/*.js'
        },
        options: {
          proxy: 'localhost:3000',
          port: 3001,
          open: true,
          watchTask: true 
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/*.js','src/components/*.vue'],
        tasks: ['babel','copy:Vue','browserify','copy:theme']
      }
    }
  });
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',[
    'babel',
    'stylus',
    'copy:Vue',
    'copy:css',
    'copy:php',
    'copy:phpfunction',
    'browserify',
    'copy:theme',
    'concat',
    'browserSync',
    'watch'
  ]); 
};

