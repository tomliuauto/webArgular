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

// Mcontrol.check = function () {
//   if(Mcontrol.items.length ===0 || Mcontrol.searchTerm){
//     console.log('nothing found');
//     return true;
//
//   }
//   return false;
// }

};



NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var controller = this;
  controller.searchTerm = "";
  controller.found = [];
  controller.ifNothing = false;

  controller.checkItems = function(){
    console.log(typeof controller.found);
    console.log(controller.found);
    console.log(controller.found.length);

    if(controller.found.length == 0){
      console.log("found length" + " " + controller.found.length);
      // return true;
      return controller.ifNothing = true;
    }else {
      return controller.ifNothing = false;

    }

  };

  controller.search = function (){

    var promise = MenuSearchService.getMatchedMenuItems(controller.searchTerm);
        promise.then(function (response) {
          controller.found = response;
          console.log(controller.found);
          console.log(controller.found.length);
          console.log(typeof controller.found);
          controller.checkItems();
        })
        .catch(function (error) {
          console.log(error);
        });

    console.log(controller.found);
    console.log(controller.found.length);
    console.log(controller.found.length == 0);



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
    // var foundItems = [];

    return $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      }).then(function (response) {
        var foundItems = [];
        // console.log(response.data);

        // console.log("rearchItem " + rearchItem.length);
        // console.log(rearchItem);
        response.data.menu_items.forEach(function(item){

          if (item.description.toLowerCase().indexOf(rearchItem.toLowerCase()) !== -1 && rearchItem.length != 0  ){
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
      // console.log(foundItems);
      // return foundItems;
  }

  // service.removeItem = function (itemIndex) {
  //   foundItems.splice(itemIndex, 1);
  // };

};

})();
