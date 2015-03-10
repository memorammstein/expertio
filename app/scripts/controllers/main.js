'use strict';

/**
 * @ngdoc function
 * @name expertioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expertioApp
 */
angular.module('expertioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
