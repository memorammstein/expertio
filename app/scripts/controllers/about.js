'use strict';

/**
 * @ngdoc function
 * @name expertioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the expertioApp
 */
angular.module('expertioApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
