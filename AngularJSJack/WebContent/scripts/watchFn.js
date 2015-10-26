 var myApp = angular.module('myApp', []);

    myApp.controller('CartController', function($scope) {
      $scope.bill = {};
      $scope.items = [
      {title: 'Paint pots', quantity: 8, price: 3.95},
      {title: 'Polka dots', quantity: 17, price: 12.95},
      {title: 'Pebbles', quantity: 5, price: 6.95}
      ];
      $scope.totalCart = function() {
        var total = 0;
        for (var i = 0, len = $scope.items.length; i < len; i++) {
          total = total + $scope.items[i].price * $scope.items[i].quantity;
        }
          console.log('totalCart() "' + total + '"');
        return total;
      }
      $scope.subtotal = function() {
        //console.log($scope.totalCart() - $scope.bill.discount)
        return $scope.totalCart() - $scope.bill.discount;
      };
      function calculateDiscount(newValue, oldValue, scope) {
        //console.log("new "+newValue)
        //console.log("old "+oldValue)
        $scope.bill.discount = newValue > 100 ? 10 : 0;
        //console.log("bill.discount "+$scope.bill.discount)
      }
      $scope.$watch($scope.totalCart, calculateDiscount);
      //-- $scope.$watch('things.a + things.b', callMe(...));
     /*
      $watch(watchFn, watchAction, deepWatch)
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