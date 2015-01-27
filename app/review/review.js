'use strict';

angular.module('myApp.review', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/review', {
      templateUrl: 'review/review.html',
      controller: 'ReviewCtrl'
    });
  }])


    .controller('ReviewCtrl', ['$scope', 'Restangular', function($scope, Restangular) {

        Restangular.all('reviews').getList().then(function (data){
            $scope.reviews = data;
        });


        $scope.addReview = function() {
          Restangular.all('review').customPOST($scope.review).then(function() {


          });
      };
  }]);