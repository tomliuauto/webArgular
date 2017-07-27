(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var itemAdder = this;

    itemAdder.itemName = "";
    itemAdder.itemQuantity = "";

    itemAdder.addItem = function () {
        ShoppingListCheckOffService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
      }

   itemAdder.items = ShoppingListCheckOffService.getToBuyList();

  };



  function ShoppingListCheckOffService() {
    var service = this;

    // List of toBuy items
    var toBuyList = [];
    // List of Bought items
    var BoughtList = [];

    // add item to toBuyList
    service.addItem = function (itemName, quantity) {
        var item = {
          name: itemName,
          quantity: quantity
        };
        toBuyList.push(item);
      };

      //Get the whole list items
    service.getToBuyList = function () {
      return toBuyList;
    };

    // service.removeItem = function (itemIdex) {
    //   items.splice(itemIdex, 1);
    // };

  };

})();
