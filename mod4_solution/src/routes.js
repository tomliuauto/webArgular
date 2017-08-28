(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menu/views/home.view.html'
  })

  // categoeries list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menu/views/categories.view.html',
    controller: 'categoriesController as cc',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })


  // items list
  .state('items', {
    url: '/items/{shortname}',
    templateUrl: 'src/menu/views/items.view.html',
    controller: "itemsController as ic",
    resolve: {
      items:['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.shortname);
      }]
    }
  });

}

})();
