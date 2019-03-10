var myApp = angular.module("myApp", ["ngRoute"]);

myApp.controller("myCtrl", function($scope, $http, $location){
    this.$onInit =  function(){
      console.log('init data');
      $scope.message = '';
      fetch('/data.json').then(function(response){
        return response.json();
      }).then(function(data){
        $scope.banks = data;
        console.log(data);
      })
    }

    $scope.name = " Welcome to AngularJS"

    $scope.login = function(){
      if($scope.userId == '14' && $scope.password == '9999')
        $location.path('/detail');
      else
        $scope.message = "Try again please !"
    }

    $scope.view = function(){
      console.log($scope.selected);
      $scope.account = $scope.banks.bankList[$scope.selected];
    }
})
myApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      controller:'myCtrl',
      templateUrl : "view/login.html"
    })
    .when("/detail", {
      controller:'myCtrl',
      templateUrl : "view/detail.html"
    })
    
})