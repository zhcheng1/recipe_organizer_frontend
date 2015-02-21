'use strict';

angular.module('myApp.addRecipe', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add-recipe', {
    templateUrl: 'add-recipe/add-recipe.html',
    controller: 'AddRecipeCtrl'
  });
}])

.controller('AddRecipeCtrl', ['$scope', 'Restangular', '$location', '$http', function($scope, Restangular, $location, $http) {

    var host = $location.host();

    $scope.uploadFile = function (files) {
        $scope.recipe.picture = files[0];
    };

    // Save fields to the item object
    $scope.addRecipe = function () {

        var fd = new FormData();
        fd.append("photo", $scope.recipe.picture);
        fd.append("name", $scope.recipe.name);
        fd.append("description", $scope.recipe.description);
        fd.append("directions", $scope.recipe.directions);
        fd.append("ingredients", $scope.recipe.ingredients);

        Restangular.one('add-recipe/').withHttpConfig({transformRequest: angular.identity})
            .customPOST(fd, '', undefined, {'Content-Type': undefined})
            .then(function (response) {
                $location.path('/recipes');
            }).error(function (response) {
                alert('Error: Fill up all the blanks!');
        });

        //
        //$http.post(host+'add-recipe/', fd, {
        //    headers: {'Content-Type':  undefined},
        //    transformRequest: angular.identity
        //}).success(function (response) {
        //    $location.path('/recipes');
        //}).error(function (response) {
        //    if (response['photo']){
        //        alert('Error: Add a photo!');
        //    }
        //
        //});
    };
    }]);