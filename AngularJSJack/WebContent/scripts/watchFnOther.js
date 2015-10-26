 var myApp = angular.module('myApp', []);

    myApp.controller('CartController', function($scope) {
      $scope.bill = {};
      $scope.items = [
      {title: 'Paint pots', quantity: 8, price: 3.95},
      {title: 'Polka dots', quantity: 17, price: 12.95},
      {title: 'Pebbles', quantity: 5, price: 6.95}
      ];
      var calculateTotals = function() {
      var total = 0;
      for (var i = 0, len = $scope.items.length; i < len; i++) {
        total = total + $scope.items[i].price * $scope.items[i].quantity;
      }
      $scope.bill.totalCart = total;
      $scope.bill.discount = total > 100 ? 10 : 0;
      $scope.bill.subtotal = total - $scope.bill.discount;
        console.log('totalCart "' + total + '"');
      };
     // $scope.$watch('items', calculateTotals, true);
     //-- $scope.$watch('things', callMe(...), true);
      $scope.$watch(function() {
      var total = 0;
      for (var i = 0; i < $scope.items.length; i++) {
      total = total + $scope.items[i].price * $scope.items[i].quantity;
      }
      $scope.bill.totalCart = total;
      $scope.bill.discount = total > 100 ? 10 : 0;
      $scope.bill.subtotal = total - $scope.bill.discount;
        console.log('totalCart "' + total + '"');
      });
     /*
      $watch(watchFn, watchAction, deepWatch)
      $watch function can take either a function (as we did previously) or a string.
      *watchFn
      This parameter is a string with an Angular expression or a function that returns
      the current value of the model that you want to watch. This expression will be
      evaluated multiple times, so you need to make sure that it has no side effects. That
      is, it can be called multiple times without changing state. For the same reason, watch
      expressions should be computationally cheap. If you’ve passed in an Angular ex‐
      pression in a string, it will be evaluated against objects available to the scope it’s
      called on.
      *watchAction
      This is the function or expression to be called when the watchFn changes. In the
      function form, it receives the new and old values of watchFn as well as a reference
      to the scope. Its signature is function(newValue, oldValue, scope).
      *deepWatch
      If set to true, this optional boolean parameter tells Angular to examine each prop‐
      erty within the watched object for changes. You’d use this if you wanted to watch
      individual elements in an array or properties in an object instead of just a simple
      value. As Angular needs to walk the array or object, this can be computationally
      expensive if the collection is large.
     */
    });