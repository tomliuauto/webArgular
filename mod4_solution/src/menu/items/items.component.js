(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menu/items/items.component.html',
  bindings: {
    items: '<'
  }
});

})();
