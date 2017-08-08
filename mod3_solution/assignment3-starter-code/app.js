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
      items: '<',
      remove: '&remove',
      searchTerm:'@'

    },
    controller: MenuController,
    controllerAs: 'Mcontrol',
    bindToController: true,
    templateUrl: 'listItem.html',


  };

  return ddo;
};

function MenuController() {
  var Mcontrol = this;

Mcontrol.check = function () {
  if(Mcontrol.items.length ===0 || Mcontrol.searchTerm){
    console.log('nothing found');
    return true;

  }
  return false;
}

};



NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var controller = this;
  controller.searchTerm = " ";
  controller.found = [];


  controller.search = function (){

    controller.found = MenuSearchService.getMatchedMenuItems(controller.searchTerm);
    console.log(controller.found);

  };

  controller.getItems = function (){
    return controller.found;
  }


  controller.removeItem = function(itemIndex){
    controller.found.splice(itemIndex, 1);
  }

};

//MenuSearchService
MenuSearchService.$inject = ['$http'];
function MenuSearchService ($http){
  var service = this;
  var message = "";


  service.getMatchedMenuItems = function(rearchItem){
    var foundItems = [];

     $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      }).then(function (response) {
        console.log(response.data);
        response.data.menu_items.forEach(function(item){
          // console.log(item)

          if (item.description.toLowerCase().indexOf(rearchItem.toLowerCase()) !== -1  ){
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
      console.log(foundItems);
      return foundItems;
  }

  // service.removeItem = function (itemIndex) {
  //   foundItems.splice(itemIndex, 1);
  // };

};

})();
