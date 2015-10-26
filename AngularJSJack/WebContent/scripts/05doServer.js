//Create a module to support our shopping views
var myApp = angular.module('myApp', []);
// Set up the service factory to create our Items interface to the
// server-side database
myApp.factory('Items', function() {
	var items = {};
	items.query = function() {
	// In real apps, we'd pull this data from the server...
	return [
		{title: 'Paint pots', description: 'Pots full of paint', price: 3.95},
		{title: 'Polka dots', description: 'Dots with polka', price: 2.95 },
		{title: 'Pebbles', description: 'Just little rocks', price: 6.95}
	];
	};
	return items;
});
	myApp.controller('HomeController', function($scope) {
		$scope.city = 'Hoang';
	});
    myApp.controller('ShoppingController', function($scope, Items) {
    	$scope.items = Items.query();
    });