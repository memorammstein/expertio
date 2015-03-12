'use strict';

/**
 * @ngdoc function
 * @name expertioApp.controller:ProcessorCtrl
 * @description
 * # ProcessorCtrl
 * Controller of the expertioApp
 */
angular.module('expertioApp')
  .controller('ProcessorCtrl', function ($scope) {

  	$scope.data = {};
  	$scope.fileModel= {};

  	var reader = new FileReader();

  	reader.onload = function () {
  		$scope.data.raw = reader.result;
  	}

  	$scope.read = function () {
  		reader.readAsText($scope.fileModel);
  	}

  });
