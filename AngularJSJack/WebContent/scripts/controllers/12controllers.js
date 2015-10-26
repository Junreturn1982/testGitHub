var myAppModule = angular.module('app', [ 'ngResource' ]);
/*
 * example for CRUD for Object
 */
myAppModule.factory('CreditCard', ['$http', function($http) {
	var baseUrl = '/DemoRestfulAndAngularJS/rest/product/findall';
	return {
	get: function(cardId) {
	return $http.get(baseUrl + '/' + cardId);
	},
	save: function(card) {
	var url = card.id ? baseUrl + '/' + card.id : baseUrl;
	return $http.post(url, card);
	},
	query: function() {
	return $http.get(baseUrl);
	},
	charge: function(card) {
	return $http.post(baseUrl + '/' + card.id, card, {params: {charge: true}});
	}
	};
	}]);

myAppModule.controller('PromiseCtrl', [ '$scope', '$resource','CreditCard', function($scope, $resource, CreditCard) {
	var resource = $resource('/DemoRestfulAndAngularJS/rest/product/findall/:id',{
		id : '@id'
		}, {
		get: {
	        isArray: true
		}
	});
	var resourceObj = $resource('/DemoRestfulAndAngularJS/rest/product/findall/:id');
	/*
	 * when get have parameter, do not use isArray = boolean because required return Object (have parameter). 
	 * resource.query() for 2 situation. 
	 */
	 
	$scope.example1 = resourceObj.query(); // resource.query(); // OK  
//	resource.get(function(value) {
//		$scope.example1 = value;
//	}, function(httpResponse) {
//		$scope.example1 = httpResponse.status;
//	});
    
	resource.get().$promise.then(function(value) {
		$scope.example2 = value;
	});
    
	resourceObj.get({
		id : 'something'
	}).$promise.then(function(value) {
		console.log(value.name);
		$scope.example3 = value;
	});
    
	resource.get(function(value) {
		$scope.example4 = value;
	});
    
	resourceObj.get({
		id : 'P02'
	}, function(value) {
		$scope.example5 = value;
	}, function(httpResponse) {
		$scope.example5 = httpResponse.status;
	});
	
	CreditCard.query().success(function(data) {
		$scope.example6 = data;
	});
} ]);

/*
 * http://stackoverflow.com/questions/13269882/angularjs-resource-restful-example
 * http://www.sitepoint.com/creating-crud-app-minutes-angulars-resource/
 */
