(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var controller = this;
  controller.searchTerm = " ";
  // console.log("this is Ok")
  controller.search = function (){
    // console.log(controller.searchTerm);
    console.log(MenuSearchService.getMatchedMenuItems());
  };

};

MenuSearchService.$inject = ['$http'];
function MenuSearchService ($http){
  var service = this;
  var message = "";

  service.getMatchedMenuItems = function(){
    // console.log(term);
    $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    }).then(function (response) {
      console.log(response.data);
      service.message = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });


  }


};

})();
