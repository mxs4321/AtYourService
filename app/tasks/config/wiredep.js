/**
 * Created by Greg on 4/11/2016.
 */
module.exports = function(grunt) {
  grunt.config.set('wiredep', {
    app: {
      src: ['<%= yeoman.app %>/index.html'],
      ignorePath:  /\.\.\//
    },
    test: {
      devDependencies: true,
      src: '<%= karma.unit.configFile %>',
      ignorePath:  /\.\.\//,
      fileTypes:{
        js: {
          block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
          detect: {
            js: /'(.*\.js)'/gi
          },
          replace: {
            js: '\'{{filePath}}\','
          }
        }
      }
    },
    sass: {
      src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
      ignorePath: /(\.\.\/){1,2}bower_components\//
    }
  });

  grunt.loadNpmTasks('grunt-wiredep');
};
