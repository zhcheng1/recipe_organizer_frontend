'use strict';

angular.module('myApp.recipes', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
          .when('/recipes',
          {
            templateUrl: 'recipes/recipes.html',
            controller: 'RecipesCtrl'
          });
    }])

    .controller('RecipesCtrl', ['$scope', 'RecipeService', function($scope, RecipeService) {
        RecipeService.getAll().then(function (data){
            $scope.recipes = data;
        });



    }]);




