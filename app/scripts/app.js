'use strict';

/**
 * @ngdoc overview
 * @name expertioApp
 * @description
 * # expertioApp
 *
 * Main module of the application.
 */
angular
  .module('expertioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'file-model'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/processor', {
        templateUrl: 'views/processor.html',
        controller: 'ProcessorCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
