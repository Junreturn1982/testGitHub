<html>
<head>
   <title>AngularJS Dependency Injection</title>
</head>
<body>
   <h2>AngularJS Sample Application</h2>
   <div ng-app="mainApp" ng-controller="CalcController">
      <p>Enter a number: <input type="number" ng-model="number" />
      <button ng-click="square()">X<sup>2</sup></button>
      <p>Result: {{result}}</p>
       <div ng-controller="HoangController">
      	<p>Enter a number: <input type="number" ng-model="number" />
	      <button ng-click="useFactory()">X + 1</sup></button>
	      <p>Result: {{result}}</p>
      </div>
   </div>
   <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
   <script>
      var mainApp = angular.module("mainApp", []);
	  
      mainApp.config(function($provide) {
         $provide.provider('MathService', function() {
            this.$get = function() {
               var factory = {};  
               factory.multiply = function(a, b) {
                  return a * b; 
               }
               return factory;
            };
         });
         $provide.provider('HoangService', function() {
             this.$get = function() {
				return{
					add : function(a,b) {
		     			return a + b;
		     		},
		     		sub : function(a,b) {
		     			return a - b;
		     		}
				}
             };
          });
      });

      mainApp.value("defaultInput", 5);

//       mainApp.factory('MathService', function() {     
//          var factory = {};  
//          factory.multiply = function(a, b) {
//             return a * b; 
//          }
//          return factory;
//       }); 

      mainApp.service('CalcService', function(MathService){
            this.square = function(a) { 
            return MathService.multiply(a,a); 
         }
      });

      mainApp.controller('CalcController', function($scope, CalcService, defaultInput) {
            $scope.number = defaultInput;
            $scope.result = CalcService.square($scope.number);

            $scope.square = function() {
            $scope.result = CalcService.square($scope.number);
         }
      });
      
      mainApp.controller('HoangController', function($scope, HoangService) {
          $scope.useFactory = function() {
          $scope.result = HoangService.add($scope.number,1);
       }
      });
   </script>
<!--    
AngularJS cung cấp kỹ thuật Dependency Injection, cho phép các thành phần lõi của AngularJS có thể được inject tới các thành phần phụ thuộc khác.

value

factory

service

provider

constant

*provider được sử dụng bởi trong nội bộ AngularJS để tạo service, factory … trong quá trình cài đặt (quá trình mà AngularJS khởi tạo chính nó). 
 Provider là một phương thức factory đặc biệt với phương thức get() trả về giá trị là value/service/factory.
*constants được sử dụng thể thiết lập các giá trị trong quá trình cài đặc và giá trị không được thiết lập trong quá trình cài đặt.
	ex: mainApp.constant("configParam", "constant value");
 -->
</body>
</html>