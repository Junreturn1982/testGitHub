//Create a module to support our shopping views
var myApp = angular.module('myApp', []);

	myApp.controller('HomeController', function($scope,$http) {
		var url="../data/08data.txt";
		$http.get(url).success(function(data, status, headers, config) {
			$scope.items = data;
			});
	});
