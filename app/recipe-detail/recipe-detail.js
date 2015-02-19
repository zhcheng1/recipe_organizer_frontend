
'use strict';

angular.module('myApp.recipeDetail', ['ngRoute', 'ui.bootstrap'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
          .when('/recipes/:recipeId',
          {
            templateUrl: 'recipe-detail/recipe-detail.html',
            controller: 'RecipeDetailCtrl'
          });
    }])

    .controller('RecipeDetailCtrl', ['$scope', 'Restangular', '$routeParams', '$location',function($scope, Restangular, $routeParams, $location) {
        $scope.navCollapsed = true;
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
        var newReview={};

        $scope.addReview = function() {
            var newReview={
                    recipe: $routeParams.recipeId,
                    title: $scope.reviewTitle,
                    username: $scope.reviewUserName,
                    star: parseInt($scope.rate),
                    reviews: $scope.reviewContent

                };

            Restangular.one('add-review/').customPOST(newReview).then(function(review) {
                $scope.recipe.reviews.push(review);
                $scope.reviewUserName="";
                $scope.reviewTitle="";
                $scope.reviewContent="";
                $scope.rate="";
            });
        };

        //delete a review
        $scope.deleteReview=function(objects, index){

            var id=objects["id"];

            Restangular.one('review', id).customDELETE().then(function(){
	            $scope.recipe.reviews.splice(index, 1);
            });


        };

        //show the addReview form or hide it
        $scope.reviewform = true;

        $scope.toggle = function(){
            $scope.reviewform = !$scope.reviewform;
            return $scope.reviewform
        };




  }]);

