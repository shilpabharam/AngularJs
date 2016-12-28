var myApp = angular.module('myApp' ,['ngRoute']);


myApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'hello.html'
	})
	.when('/helloUser',{
		templateUrl: 'helloUser.html'
	})
	
});
