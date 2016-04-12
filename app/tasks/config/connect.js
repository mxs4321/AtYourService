/**
 * Created by Greg on 4/2/2016.
 */
module.exports = function(grunt){


  grunt.config.set('connect', {
    options: {
      port: 9000,
      // Change this to '0.0.0.0' to access the server from outside.
      hostname: 'localhost',
      livereload: 35729
    },
    livereload: {
      options: {
        open: true,
        middleware: function (connect) {
          return [
            connect.static('.tmp'),
            connect().use(
              '/bower_components',
              connect.static('./bower_components')
            ),
            connect().use(
              '/app/styles',
              connect.static('./app/styles')
            ),
            connect.static(me.app.app)
          ];
        }
      }
    },
    test: {
      options: {
        port: 9001,
        middleware: function (connect) {
          return [
            connect.static('.tmp'),
            connect.static('test'),
            connect().use(
              '/bower_components',
              connect.static('./bower_components')
            ),
            connect.static(me.app.app)
          ];
        }
      }
    },
    dist: {
      options: {
        open: true,
        base: '<%= yeoman.dist %>'
      }
    }
  });
};
