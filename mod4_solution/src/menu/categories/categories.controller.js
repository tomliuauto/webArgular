(function () {
'use strict';

angular.module('MenuApp')
.controller('categoriesController', categoriesController);

categoriesController.$inject = ['categories'];
function categoriesController(categories) {
  var cc = this;
  cc.categories = categories;
  console.log(cc.categories);

};
// categoriesController.$inject = ['MenuDataService'];
// function categoriesController(MenuDataService) {
//   var cataList = this;
//   cataList.categories = [];
//
//
//    var promise = MenuDataService.getAllCategories();
//   console.log(promise);
//
//    promise.then(function (response) {
//     console.log(response);
//      cataList.categories = response;
//      console.log( cataList.categories);
//   })
//   .catch(function (error) {
//     console.log("Something went terribly wrong.");
//   });
//
//   console.log( cataList.categories);
//
//   cataList.getCategories = function (){
//     return cataList.categories
//   }
//
// }
//
})();
