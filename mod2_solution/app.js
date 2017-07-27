(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
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


   itemAdder.addBoughtList = function(itemIndex){
     ShoppingListCheckOffService.addBoughtList(itemIndex);
     ShoppingListCheckOffService.removeToBuyList(itemIndex);
   }

   itemAdder.boughtOnes = ShoppingListCheckOffService.getBoughtList();


  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtItems = this;

    boughtItems.tobuyList = ShoppingListCheckOffService.getToBuyList();

    boughtItems.items =  ShoppingListCheckOffService.getBoughtList();
  };

  function ShoppingListCheckOffService() {
    var service = this;

    // List of toBuy items
    var toBuyList = [];
    // List of Bought items
    var boughtList = [];

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

      //remove from toBuyList
    service.removeToBuyList = function (itemIdex) {
      toBuyList.splice(itemIdex, 1);
    };

      //add to bought list
    service.addBoughtList = function (itemIndex) {
        boughtList.push(toBuyList[itemIndex]);
        console.log(boughtList);
      };

      //Get the whole boughtList items
    service.getBoughtList = function () {
      return boughtList;
    };

  };

})();
