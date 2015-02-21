'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.recipes',
  'myApp.addRecipe',
  'myApp.welcome',
  'myApp.recipeDetail',
  'myApp.version',
  'myApp.contact',
  'restangular',
  'ui.bootstrap'
])
    .config(['$routeProvider', 'RestangularProvider', function($routeProvider, RestangularProvider) {
    $routeProvider
        .otherwise({
          redirectTo: '/welcome'}); //$routeProvider set main page
    RestangularProvider.setBaseUrl('http://localhost:8001/');  //RestangularProvider set base url
  }])

    .service('RecipeService', ['Restangular', '$q', function(Restangular, $q){

      this.getAll = function() {

        var promise = $q.defer(); //empty lib
        Restangular.all('recipes/').getList().then(function(recipes){ //get data pass to a function
          promise.resolve(recipes); //pass data to promise lib
        });
        return promise.promise;

      };
    }])



;

