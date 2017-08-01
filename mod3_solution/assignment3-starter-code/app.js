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
    console.log(controller.searchTerm);
    // console.log("you click the search key");
    var promise = MenuSearchService.getMatchedMenuItems(controller.searchTerm);
    console.log(promise);
  };

};

MenuSearchService.$inject = ['$http'];
function MenuSearchService ($http){
  var service = this;
  var message = "";

  service.getMatchedMenuItems = function(rearchItem){
    // console.log(term);
    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    }).then(function (response) {
      // console.log(response.data.menu_items);
      var foundItems = [];
      response.data.menu_items.forEach(function(item){
        // console.log(item)
        if (item.description.toLowerCase().indexOf(rearchItem.toLowerCase()) !== -1){
          // console.log(item);
          foundItems.push(item);
          
        }
        
      })
        console.log(foundItems);
        return foundItems;
    })
    .catch(function (error) {
      console.log(error);
    });


  }


};

})();
