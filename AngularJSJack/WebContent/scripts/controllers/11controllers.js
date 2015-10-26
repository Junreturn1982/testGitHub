var app = angular.module('guthub', [ 'ngRoute','guthub.directives', 'guthub.services' ]);
app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		controller : 'ListCtrl',
		resolve : {
			recipes : function(MultiRecipeLoader) {
				return MultiRecipeLoader();
			}
		},
		templateUrl : '../pages/11list.html'
	}).when('/edit/:recipeId', {
		controller : 'EditCtrl',
		resolve : {
			recipe : function(RecipeLoader) {
				return RecipeLoader();
			}
		},
		templateUrl : '../pages/11recipeForm.html'
	}).when('/view/:recipeId', {
		controller : 'ViewCtrl',
		resolve : {
			recipe : function(RecipeLoader) {
				return RecipeLoader();
			}
		},
		templateUrl : '../pages/11viewRecipe.html'
	}).when('/delete/:recipeId', {
		controller : 'DeleteCtrl',
		resolve : {
			recipe : function(DeleteRecipe) {
				return DeleteRecipe();
			},
			recipes : function(MultiRecipeLoader) {
				return MultiRecipeLoader();
			}
		},
		templateUrl : '../pages/11list.html'
	}).when('/new', {
		controller : 'NewCtrl',
		templateUrl : '../pages/11recipeForm.html'
	}).otherwise({
		redirectTo : '/'
	});
} ]);


app.controller('ListCtrl', [ '$scope', 'recipes', function($scope, recipes) {
	$scope.recipes = recipes;
} ]);
app.controller('ViewCtrl', [ '$scope', '$location', 'recipe', function($scope, $location, recipe) {
	$scope.recipe = recipe;
	$scope.edit = function() {
		$location.path('/edit/' + recipe.id);
	};
} ]);
app.controller('EditCtrl', [ '$scope', '$location', 'recipe',
		function($scope, $location, recipe) {
			$scope.recipe = recipe;
			$scope.save = function() {
				$scope.recipe.$save(function(recipe) {
					$location.path('/view/' + recipe.id);
				});
			};
			$scope.remove = function() {
				delete $scope.recipe;
				$location.path('/');
			};
		} ]);
app.controller('NewCtrl', [ '$scope', '$location', 'Recipe',
		function($scope, $location, Recipe) {
			$scope.recipe = new Recipe({
				ingredients : [ {} ]
			});
			$scope.save = function() {
				$scope.recipe.$save(function(recipe) {
					$location.path('/view/' + recipe.id);
				});
			};
		} ]);
app.controller('DeleteCtrl', function($scope,recipes,Recipe) {
		//$scope.recipes = recipes;
	$scope.recipes = Recipe.query();
	});
app.controller('IngredientsCtrl', [ '$scope', function($scope) {
	$scope.addIngredient = function() {
		var ingredients = $scope.recipe.ingredients;
		ingredients[ingredients.length] = {};
	};
	$scope.removeIngredient = function(index) {
		$scope.recipe.ingredients.splice(index, 1);
	};
} ]);
/*
 * (now Karma) - JavaScript Test Runner
 * https://viblo.asia/linh_chim/posts/73KbvZzzvmWB
 * http://acegik.net/blog/categories/#angularjs-ref
 */

/*
 *  When the data is returned from the server then the object is an instance of the resource class. 
 *  The actions save, remove and delete are available on it as methods with the $ prefix. 
 *  This allows you to easily perform CRUD operations (create, read, update, delete) on server-side data like this:
  var User = $resource('/user/:userId', {userId:'@id'});
  var user = User.get({userId:123}, function() {
  user.abc = true;
  user.$save();
});
 */
