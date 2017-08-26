(function () {
'use strict';

angular.module('MenuApp')
.controller('catagoriesController', catagoriesController);

// console.log("this is catagoriesController");


catagoriesController.$inject = ['MenuDataService'];
function catagoriesController(MenuDataService) {
  var cataList = this;
  cataList.categories = [];
  
  
   var promise = MenuDataService.getAllCategories();
  console.log(promise);
  
   promise.then(function (response) {
    console.log(response);
     cataList.categories = response;
     console.log( cataList.categories);
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });
  
  console.log( cataList.categories);
}

})();
