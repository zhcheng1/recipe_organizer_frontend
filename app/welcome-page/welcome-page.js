
angular.module('myApp.welcome', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
          .when('/welcome',
          {
            templateUrl: 'welcome-page/welcome-page.html'

          });
    }])

