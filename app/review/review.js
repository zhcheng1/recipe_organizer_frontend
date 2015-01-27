'use strict';

angular.module('myApp.review', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/review', {
      templateUrl: 'review/review.html',
      controller: 'ReviewCtrl'
    });
  }])

  .controller('AddRecipeCtrl', ['$scope', 'Restangular', function($scope, Restangular) {
      $scope.review = {reviews:[]};


      $scope.addReview = function() {
          Restangular.all('review').customPOST($scope.review).then(function() {

          })
      }
  }]);