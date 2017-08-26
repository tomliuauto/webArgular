(function () {
'use strict';

angular.module('MenuApp')
.controller('catagoriesController', catagoriesController);


catagoriesController.$inject = ['items'];
function catagoriesController(items) {
  var cataList = this;
  cataList.items = items;
}

})();
