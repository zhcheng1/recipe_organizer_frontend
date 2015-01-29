'use strict';

angular.module('myApp.review', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/review/review', {
      templateUrl: 'review/review.html',
      controller: 'ReviewCtrl'
    });
  }])


    .controller('ReviewCtrl', ['$scope', 'Restangular', '$routeParams', function($scope, Restangular, $routeParams) {

        $scope.recipeId = $routeParams.recipeId;

        Restangular.all('reviews').getList().then(function (data){
            $scope.reviews = data;
        });


        $scope.addReview = function() {
          Restangular.all('review').customPOST($scope.review).then(function() {


          });
      };
  }]);