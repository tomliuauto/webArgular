(function () {
  'use strict';

  angular.module('LunchCheckApp', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.message = "";
    $scope.lunchItem = "";
    // console.log($scope.lunchItem.split(',').length);

    $scope.checkLunch = function () {
      var m = $scope.lunchItem.split(',').length;
      // console.log("you check the lunch")
      if ($scope.lunchItem==="") {
        $scope.message = "Please enter data first"
      } else if (m < 4) {
        $scope.message = "Enjoy!"
      } else {
        $scope.message = "Too much!"
      };

    };
  }

})();
