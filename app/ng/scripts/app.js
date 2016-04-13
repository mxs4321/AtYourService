'use strict';

/**
 * @ngdoc overview
 * @name ays
 * @description
 * # ays
 *
 * Main module of the application.
 */
angular
  .module('ays', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {
    console.log("I'm running! wadup");
    console.log("eh More things!");

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        controller: 'MainCtrl',
        templateUrl: 'views/main.html'
      });
  });
