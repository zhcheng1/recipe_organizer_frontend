'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.recipes',
  'myApp.addRecipe',
  'myApp.review',
  'myApp.recipeDetail',
  'myApp.version',
  'restangular'
]).
  config(['$routeProvider', 'RestangularProvider', function($routeProvider, RestangularProvider) {
    $routeProvider
        .otherwise({
          redirectTo: '/recipes'}); //$routeProvider set main page
    RestangularProvider.setBaseUrl('http://localhost:8001');  //RestangularProvider set base url
  }]);

