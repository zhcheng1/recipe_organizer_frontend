'use strict';

angular.module('myApp.contact', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/contact', {
      templateUrl: 'contact/contact.html',
      controller: 'ContactCtrl'
    });
  }])

    .controller('ContactCtrl', ['$scope', 'Restangular', '$routeParams', function($scope, Restangular, $routeParams) {
        $scope.navCollapsed = true;
        $scope.sendEmail = function(){

            var email = {
                'subject': 'from recipe web user---'+$scope.subject,
                'message': $scope.message,
                'from_email': $scope.from_email
            };

            Restangular.one('send-email/').customPOST(email).then(function(response){
                $scope.subject='';
                $scope.message='';
                $scope.from_email='';
                alert(response);
            })
        }
  }]);