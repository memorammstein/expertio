'use strict';

describe('Controller: ProcessorCtrl', function () {

  // load the controller's module
  beforeEach(module('expertioApp'));

  var ProcessorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProcessorCtrl = $controller('ProcessorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
