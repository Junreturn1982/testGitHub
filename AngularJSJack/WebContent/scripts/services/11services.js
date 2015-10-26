var services = angular.module('guthub.services', [ 'ngResource' ]);

services.factory('Recipe', [ '$resource', function($resource) {
	//var url="../data/11data.txt";
	return $resource('/DemoRestfulAndAngularJS/rest/recipe/findall/:id', {
		id : '@id'
	});
} ]);
services.factory('MultiRecipeLoader', [ 'Recipe', '$q', function(Recipe, $q) {
	return function() {
		var delay = $q.defer();
		Recipe.query(function(recipes) {
			delay.resolve(recipes);
		}, function() {
			delay.reject('Unable to fetch recipes');
		});
		return delay.promise;
	};
} ]);
services.factory('RecipeLoader', ['Recipe','$route','$q',function(Recipe, $route, $q) {
			return function() {
				var delay = $q.defer();
				Recipe.get({ id :  $route.current.params.recipeId 
				}, function(recipe) {
					delay.resolve(recipe);
				}, function() {
					delay.reject('Unable to fetch recipe '+ $route.current.params.recipeId);
				});
				return delay.promise;
			};
		} ]);
services.factory('DeleteRecipe', ['Recipe','$route','$q',function(Recipe, $route, $q) {
	return function() {
		var delay = $q.defer();
		Recipe.remove({ id :  $route.current.params.recipeId 
			},function(recipe){
				delay.resolve(recipe);
			}, function(){
				delay.reject('Nothing');
			}
		);
		return delay.promise;
	};
} ]);


/*
 * http://thapsang.net/angularjs/promises-deferred-trong-angularjs.html
 * $resource(url, [paramDefaults], [actions], options);
 * 
 *  When the data is returned from the server then the object is an instance of the resource class. 
 *  The actions save, remove and delete are available on it as methods with the $ prefix. 
 *  This allows you to easily perform CRUD operations (create, read, update, delete) on server-side data like this:
  var User = $resource('/user/:userId', {userId:'@id'});
  var user = User.get({userId:123}, function() {
  	user.abc = true;
  	user.$save();
  });
 * HTTP GET "class" actions(get, save, query, remove, delete): Resource.action([parameters], [success], [error])
non-GET "class" actions: Resource.action([parameters], postData, [success], [error])
non-GET instance actions: instance.$action([parameters], [success], [error])
 * A promise (AngularJS) is an interface that deals with objects that are returned or get filled in at a
future point in time (basically, asynchronous actions). At its core, a promise is an object
with a then() function.
	What about resolve and reject, you ask? Well, deferred in AngularJS is a way of
creating promises. Calling resolve on it fulfills the promise (calls the success handler),
while calling reject on it calls the error handler of the promise.
 */