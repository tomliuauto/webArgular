(function () {
'use strict';

angular.module('MenuApp')
.controller('itemsController', itemsController);

itemsController.$inject = ['items'];
function itemsController(items) {
  var ic = this;
  ic.items = items.menu_items;
  console.log(ic.items);
};

})();
