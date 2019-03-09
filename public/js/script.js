var myApp = angular.module("myApp", ["ngRoute"]);

myApp.controller("myCtrl", function($scope, $http, $location){
    $scope.name = " Welcome to AngularJS"

    $scope.goTo = function(url){
      $location.path(url);
    }
})
myApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "view/login.html"
    })
    .when("/detail", {
      templateUrl : "view/detail.html"
    })
    
})