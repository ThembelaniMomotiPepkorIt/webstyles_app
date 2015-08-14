var myApp = angular.module('myApp', ['ui.router'] );

myApp.controller('mainController', function($scope){
	
	$scope.backGroundImage = 'Wood-Background-Pictures-Free-Download.jpg';
});

myApp.controller('recentJobsController', function($http, $scope){
	$http.get('https://jobs.github.com/positions.json?description=python&location=new+york')
		.success(function(data){
			$scope.jobs = data;
		})
});

myApp.controller('carouselController', function($scope){
	$scope.interval = 5000;
	$scope.noWrapSlides = false;

	var slides = $scope.slides=[];

	$scope.addSlide = function(){
		var newWidth =600 + slides.length+1;
		slides.push({

		});
	};

	for (var i=0; i<2; i++){
		$scope.addSlide();
	}
});

myApp.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('contact',{
			url:'/contact',
			templateUrl: 'contact-us.html'

		})
		.state('home',{
			url : '/home',
			views : {
				''				 : {templateUrl: 'home-partial.html'},
				'homeMain@home'  : {templateUrl: 'home-left-partial.html'},
				'recentJobs@home': {templateUrl: 'home-right-partial.html',
									controller : 'recentJobsController'}

			} 
		});
});