
'use strict';

angular.module('myApp.recipeDetail', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
          .when('/recipes/:recipeId',
          {
            templateUrl: 'recipe-detail/recipe-detail.html',
            controller: 'RecipeDetailCtrl'
          });
    }])

    .controller('RecipeDetailCtrl', ['$scope', 'Restangular', '$routeParams', '$location',function($scope, Restangular, $routeParams, $location) {

        $scope.recipeId = $routeParams.recipeId;


        //get one particular recipe
        Restangular.one('recipes', $scope.recipeId).customGET().then(function (data) {
            $scope.recipe = data;

        });


        //delete a recipe
        $scope.deleteRecipe = function() {
        var confirmation = confirm('Are you sure you want to delete this recipe? This cannot be undone');

            if (confirmation) {
                Restangular.one('recipes', $scope.recipeId).customDELETE().then(function() {
                    alert('Your recipe was successfully deleted!');
                    $location.path('/recipes');
                },
                function() {
                    alert('There was a problem deleting your recipe')
                })
            }
        };


        //Add new review under one particular recipe
        var newReview={
            recipe: $routeParams.recipeId,
            title: $scope.reviewTitle,
            username: $scope.reviewUserName,
            reviews: $scope.reviewContent

        };

        $scope.successMessage = "";

        $scope.addReview = function() {

            Restangular.one('add-review/').customPOST(newReview).then(function() {
                console.log(newReview);
                $scope.successMessage = "Success";
                $scope.recipe.reviews.unshift(reviews);

          });
        };


        //show the addReview form or hide it
        $scope.reviewform = true;

        $scope.toggle = function(){
            $scope.reviewform = !$scope.reviewform;
            return $scope.reviewform
        };
  }]);

