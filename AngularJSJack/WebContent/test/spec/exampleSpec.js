/*
 * (now Karma) - JavaScript Test Runner
 * https://www.youtube.com/watch?v=9-kumGACGYk (Angular in Production: What, How, When to Test?)
 * https://viblo.asia/linh_chim/posts/73KbvZzzvmWB
 * http://acegik.net/blog/categories/#angularjs-ref
 */
describe('HomeController',function() {
			// We'll fill this in
		beforeEach(module('myApp'));
		var scope;
		beforeEach(inject(function($rootScope, $controller) {
			scope = $rootScope.$new();
			$controller('HomeController',{
				$scope : scope
			});
		}));
		it('The result of test: ', function() {
			expect(scope.city).toBe('Hoang');
		});
	});