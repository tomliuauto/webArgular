(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems);

//

function FoundItems() {
  var ddo = {

    scope: {
      items: '=',
      remove: '&remove'
    },
    controller: MenuController,
    controllerAs: 'Mcontrol',
    bindToController: true,
    templateUrl: 'listItem.html',
    // template:{{Mcontrol.items}}

  };

  return ddo;
}

function MenuController() {
  var Mcontrol = this;
  console.log(Mcontrol);
  // console.log(Mcontrol.items.length);

};



NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var controller = this;
  controller.searchTerm = " ";
  controller.items = [];
  // controller.testItem = [ "ford", "honda", "BMW"];

  controller.search = function (){
    console.log(controller.searchTerm);
    controller.items = MenuSearchService.getMatchedMenuItems(controller.searchTerm);
    console.log(controller.items);

  };

  controller.getItems = function (){
    return controller.items;
  }


  controller.removeItem = function(itemIndex){
    controller.items.splice(itemIndex, 1);
  }

};

//MenuSearchService
MenuSearchService.$inject = ['$http'];
function MenuSearchService ($http){
  var service = this;
  var message = "";

  service.getMatchedMenuItems = function(rearchItem){
    // console.log(term);
    var foundItems = [];
    $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    }).then(function (response) {
      // console.log(response.data.menu_items);
      // var foundItems = [];
      response.data.menu_items.forEach(function(item){
        // console.log(item)
        if (item.description.toLowerCase().indexOf(rearchItem.toLowerCase()) !== -1){
          // console.log(item);
          foundItems.push(item);
        }

      })
        // console.log(foundItems);
        return foundItems;
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(foundItems);
    return foundItems;
  }

  // service.removeItem = function (itemIndex) {
  //   foundItems.splice(itemIndex, 1);
  // };

};

})();
