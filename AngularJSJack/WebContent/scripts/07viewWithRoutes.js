// Create a module for our core AMail services
var aMailServices = angular.module('AMail', ['ngRoute']);
// Set up our mappings between URLs, templates, and controllers
function emailRouteConfig($routeProvider) {
	$routeProvider.
	when('/', {
	controller: ListController,
	templateUrl: '../pages/07list.html'
	}).
	// Notice that for the detail view, we specify a parameterized URL component
	// by placing a colon in front of the id
	when('/view/:id', {
	controller: DetailController,
	templateUrl: '../pages/07detail.html'
	}).
	otherwise({
	redirectTo: '/'
	});
}
function message($routeProvider) {
    $routeProvider.
       when('/addStudent', {
          templateUrl: 'addStudent.jsp',
          controller: 'AddStudentController'
       }).
       when('/viewStudents', {
          templateUrl: 'viewStudents.jsp',
          controller: 'ViewStudentsController'
       }).
       otherwise({
          redirectTo: '/addStudent'
       });
}
// Set up our route so the AMail service can find it
 aMailServices.config(emailRouteConfig);
 aMailServices.config(message);
 
/*aMailServices.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/', {
	controller: ListController,
	templateUrl: '../pages/list.html'
	}).
	// Notice that for the detail view, we specify a parameterized URL component
	// by placing a colon in front of the id
	when('/view/:id', {
	controller: DetailController,
	templateUrl: '../pages/detail.html'
	}).
	otherwise({
	redirectTo: '/'
	});
}]);*/
// Some fake emails
messages = [{
id: 0, sender: 'jean@somecompany.com', subject: 'Hi there, old friend',
date: 'Dec 7, 2013 12:32:00', recipients: ['greg@somecompany.com'],
message: 'Hey, we should get together for lunch sometime and catch up.'
+'There are many things we should collaborate on this year.'
}, {
id: 1, sender: 'maria@somecompany.com',
subject: 'Where did you leave my laptop?',
date: 'Dec 7, 2013 8:15:12', recipients: ['greg@somecompany.com'],
message: 'I thought you were going to put it in my desk drawer.'
+'But it does not seem to be there.'
}, {
id: 2, sender: 'bill@somecompany.com', subject: 'Lost python',
date: 'Dec 6, 2013 20:35:02', recipients: ['greg@somecompany.com'],
message: 'Nobody panic, but my pet python is missing from her cage.'
+'She does not move too fast, so just call me if you see her.'
}, ];
// Publish our messages for the list template
function ListController($scope) {
	$scope.messages = messages;
}
// Get the message id from the route (parsed from the URL) and use it to
// find the right message object.
function DetailController($scope, $routeParams) {
	$scope.message = messages[$routeParams.id];
}
aMailServices.controller('AddStudentController', function($scope) {
    $scope.message = "This page will be used to display add student form";
 });

aMailServices.controller('ViewStudentsController', function($scope) {
    $scope.message = "This page will be used to display all the students";
 });
/*
var someModule = angular.module('someModule', [...module dependencies...])
someModule.config(function($routeProvider) {
	$routeProvider.
	when('url', {controller:aController, templateUrl:'/path/to/tempate'}).
	when(...other mappings for your app...).
	…
	otherwise(...what to do if nothing else matches...);
)};
*/