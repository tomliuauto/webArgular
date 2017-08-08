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
}

function MenuController() {
  var Mcontrol = this;

// Mcontrol.check = function () {
//   if(Mcontrol.found.length ==0 || Mcontrol.searchTerm == "" ){
//     return true;
//     console.log('nothing found');
//   }
//   return false;
// }

};



NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var controller = this;
  controller.searchTerm = " ";
  controller.found = [];


  controller.search = function (){

    // controller.found = MenuSearchService.getMatchedMenuItems(controller.searchTerm);
    // console.log(controller.found);
    var promise = MenuSearchService.getMatchedMenuItems(controller.searchTerm);
    console.log(promise);
    promise.then(function(response){
      console.log(response.data);
      controller.found = response.data;
      console.log(controller.found);
    })
    .catch(function (error) {
    console.log(error);
    // });
    
    // promise.then(function (response) {
    // menu.categories = response.data;
    // })
    // .catch(function (error) {
    // console.log("Something went terribly wrong.");
    });


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
    service.items = [];
    
    return $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      }).then(function (response) {
        console.log(response.data);
        var foundItems = [];
        response.data.menu_items.forEach(function(item){
          // console.log(item)

          if (item.description.toLowerCase().indexOf(rearchItem.toLowerCase()) !== -1  ){
            // console.log(item);
            foundItems.push(item);
          }
        })
          console.log(foundItems);
          service.items = foundItems;
          console.log(service.items);
          return service.items;
      })
      .catch(function (error) {
        console.log(error);
      });
      // console.log(service.items);
      // return service.items;
  }

  // service.removeItem = function (itemIndex) {
  //   foundItems.splice(itemIndex, 1);
  // };

};

})();
