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
  		$scope.data.read = $scope.data.raw
  							.replace(/\s*$^\s*/gm, '\n')
  							.replace(/[ \t]+/g, ' ')
  							.replace(/\s*:\s*/g, ':')
  							.replace(/\s*=\s*/g, '=')
  							.replace(/\s*<\s*/g, '<')
  							.replace(/\s*>\s*/g, '>')
  							.replace(/\s*IF\s*/g, 'IF')
  							.replace(/\s*AND\s*/g, 'AND')
  							.replace(/\s*THEN\s*/g, 'THEN');
  		$scope.data.read = $scope.data.read.split('\n');
  	};

  	$scope.read = function () {
  		reader.readAsText($scope.fileModel);
  	};

  	$scope.process = function (arreglo) {
  		$scope.data.processed = [/*{ruleFormat:'{name:"yolo",if:[1,2,3],then:"x=y"}'}*/];
  		arreglo.forEach(function (element) {
  			var splited = element.split(':');
  			var rule = {};
  			rule.name = splited[0];
  			splited = splited[1].split('THEN');
  			var tempIf = splited[0].replace('IF','').split(/AND/g);
  			rule.if = [];
  			tempIf.forEach(function (str) {
  				rule.if.push(processCompairInString(str));
  			});
  			rule.then = processResultInString(splited[1]);
  			$scope.data.processed.push(rule);
  		});
  	};

  	function processCompairInString (string) {
  		var splitedEq = string.split(/(=|<|>)/);
  		return {compare:splitedEq[0], using:splitedEq[1], against:splitedEq[2]};
  	}

  	function processResultInString (string) {
  		var splitedEq = string.split(/=/);
  		return {variable:splitedEq[0], equals:splitedEq[1]};
  	}

  });
