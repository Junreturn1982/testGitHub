<html>
<head>
   <title>Angular JS Services</title>
   <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>
<body>
   <h2>AngularJS Sample Application</h2>
   <div ng-app="mainApp" ng-controller="CalcController">
      <p>Enter a number: <input type="number" ng-model="number" />
      <button ng-click="square()">X<sup>2</sup></button>
      <p>Result: {{result}}</p>
      <div ng-controller="HoangController">
      	<p>Enter a number: <input type="number" ng-model="number" />
	      <button ng-click="useFactory()">X - 1</sup></button>
	      <p>Result: {{result}}</p>
      </div>
   </div>
   <script>
 //define a module
      var mainApp = angular.module("mainApp", []);
    //create a factory "MathService" which provides many methods to return result of two numbers
      mainApp.factory('MathService', function() {     
//          var factory = {};  
//          factory.multiply = function(a, b) {
//             return a * b 
//          }
//          return factory;
         return {
     			add : function(a,b) {
     			return a + b;
     		},
     			subtract : function(a,b) {
         		return a - b;	
     		},
     			multiply : function(a,b) {
         		return a * b;	
     		},
     			divide : function(a,b) {
         		return a * b;	
     		}
         }
      }); 
// 	//inject the factory "MathService" in a service to utilize the methods of factory.
      mainApp.service('CalcService', function(MathService){
            this.square = function(a) { 
            	return MathService.multiply(a,a); 
         	},
         	this.add = function(a) { 
                return MathService.add(a,a); 
            }
      });

      mainApp.controller('CalcController', function($scope, CalcService) {
            $scope.square = function() {
            $scope.result = CalcService.add($scope.number);
            $scope.number = "";
         }
      });
      mainApp.controller('HoangController', function($scope, MathService) {
          $scope.useFactory = function() {
          $scope.result = MathService.subtract($scope.number,1);
       }
      });
  
   </script>
<!--    AngularJS hỗ trợ các khái niệm "Seperation of Concerns - Chia để trị" sử dụng cấu trúc service. 
Service là các hàm JavaScript và có nhiệm vụ trên những task nhất định. Nó làm cho chúng thành những thực thể riêng rẽ dễ dàng trong việc bảo trì và kiểm thử. 
Controller, filter có thể gọi chúng một cách đơn giản. Service thường được inject sử dụng cơ chế dependency injection của AngularJS.

AngularJS cung cấp rất nhiều những service được định nghĩa cho trước: $http,$scope,$route,$window,$location…
Mỗi một service có những nhiệm vụ nhất định. Ví dụ, $http được sử dụng để tạo ra các ajax request lên server để lấy dữ liệu về. 
$route được sử dụng để định nghĩa thông tin routing …. Những service mặc định của AngularJS bắt đầu bởi biểu tượng $.

Có 2 cách để tạo một service là:

factory

service
 -->
</body>
</html>