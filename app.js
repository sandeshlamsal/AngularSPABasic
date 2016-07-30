var myApp=angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    
    $routeProvider
    
    .when('/',{
        templateUrl:'first.html',
        controller:'firstController'
    })
    
    .when('/second',{
        templateUrl:'second.html',
        controller:'secondController'
    })
    
    
}); 

myApp.controller('firstController',['$scope','$log',function($scope,$log){
                 $scope.name='1stPage';
                 }]);


myApp.controller('secondController',['$scope','$log',function($scope,$log){
                 $scope.name='2ndPage';
                 }]);

