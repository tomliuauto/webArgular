(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function () {
     var a = [];

     return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
    }).then(function(result){
      a = result.data;
      console.log(a);
      return a;
    })

    // return a;

  };



  service.getItemsForCategory = function (shortName) {
    var b = [];

    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
      params: {
        category: shortName
      }
    }).then(function(result){
      b = result.data;
      console.log(b);
      return b;
    })

  };

}

})();
