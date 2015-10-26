var appModule = angular.module('myApp', []);
appModule.directive('ngbkFocus', function() {
	return {
	link: function(scope, element, attrs, controller) {
	element[0].focus();
	}
	};
});
appModule.controller('AddUserController',function($scope) {
	$scope.message = '';
	$scope.addUser = function () {
	// TODO for the reader: actually save user to database...
	$scope.message = 'Thanks, ' + $scope.user.first + ', we added you!';
	};
});
/*
var appModule = angular.module('appModule', [...]);
appModule.directive('directiveName', directiveFunction);
*/
