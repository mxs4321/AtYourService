/**
 * `copy`
 *
 * ---------------------------------------------------------------
 *
 * Copy files and/or folders from your `assets/` directory into
 * the web root (`.tmp/public`) so they can be served via HTTP,
 * and also for further pre-processing by other Grunt tasks.
 *
 * #### Normal usage (`sails lift`)
 * Copies all directories and files (except CoffeeScript and LESS)
 * from the `assets/` folder into the web root -- conventionally a
 * hidden directory located `.tmp/public`.
 *
 * #### Via the `build` tasklist (`sails www`)
 * Copies all directories and files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-copy
 *
 */
module.exports = function(grunt) {

  grunt.config.set('copy', {
    dev: {
      files: [{
        expand: true,
        cwd: '<%= yeoman.app %>',
        src: [
          '*.{ico,png,txt}',
          '*.html',
          'scripts/{,*/}*',
          'images/{,*/}*.{webp}',
          'styles/fonts/{,*/}*.*'
        ],
        dest: '<%= yeoman.dist %>'
      },{
        expand: true,
        cwd: 'app/bower_components',
        src: ['**/*'],
        dest: '<%= yeoman.dist %>/bower_components'
      }]
    },
    // build: {
    //   files: [{
    //     expand: true,
    //     cwd: '.tmp/public',
    //     src: ['**/*'],
    //     dest: 'www'
    //   }]
    // },
    dist: {
      files: [{
        expand: true,
        dot: true,
        cwd: '<%= yeoman.app %>',
        dest: '<%= yeoman.dist %>',
        src: [
          '*.{ico,png,txt}',
          '*.html',
          '../index.html',
          'images/{,*/}*.{webp}',
          'styles/fonts/{,*/}*.*'
        ]
      }, {
        expand: true,
        cwd: '.tmp/images',
        dest: '<%= yeoman.dist %>/images',
        src: ['generated/*']
      }, {
        expand: true,
        cwd: '.',
        src: 'bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*',
        dest: '<%= yeoman.dist %>'
      }]
    },
    styles: {
      expand: true,
      cwd: '<%= yeoman.app %>/styles',
      dest: '.tmp/styles/',
      src: '{,*/}*.css'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
