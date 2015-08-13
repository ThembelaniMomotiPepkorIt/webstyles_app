var myApp = angular.module('myApp', [] );

myApp.controller('mainController', function($scope){
	console.log("before Image");
	$scope.backGroundImage = 'Wood-Background-Pictures-Free-Download.jpg';
	//$scope.backGroundImage = '';
	console.log("after Image"); 
});

//myApp.config(function($stateProvider, $urlRouterProvider){
	
	//$urlRouterProvider.otherwise('/home');

	//$stateProvider
	//	.state('header',{
	///		templateUrl : 'header.html'
	//	});
//});