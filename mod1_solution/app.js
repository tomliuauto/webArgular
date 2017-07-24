(function () {
  'use strict';

  angular.module('LunchCheckApp', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.message = "this is message";

    $scope.checkLunch = function () {
      
    };
  }

})();
