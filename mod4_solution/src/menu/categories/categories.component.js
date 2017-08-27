(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menu/categories/categories.component.html',
  // controller: cCompController,
  bindings: {
    categories: '<'
  }
});

})();
