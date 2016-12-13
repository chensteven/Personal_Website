module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: ['src.js'], // change src.js to the name of your source file
        dest: 'dest.js' // change dest.js to the name of your destination file
      }
    },
		less: {
      development: {
        options: {
          paths: ["css"],
          compress: true
        },
        files: {
          'css/master.css':'css/master.less' // change output.css to the name of your output file and input.css to the name of your input file
        }
      }
		},
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/master.css':'css/master.scss' // change output.css to the name of your output file and input.css to the name of your input file
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['css/master.less'], // add the name of the css files to be watched
        tasks: ['less'],
        options: {
          spawn: false
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['less', 'watch']);
};
