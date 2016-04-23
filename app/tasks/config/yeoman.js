var appConfig = {
  app: require('./../../../bower.json').appPath || 'app',
  dist: 'app/.tmp/public'
};

module.exports = function(grunt){
  grunt.config.set('yeoman', appConfig);

  return appConfig;
};

module.exports.app = appConfig;
