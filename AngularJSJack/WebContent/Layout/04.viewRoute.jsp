<html>
<head>
   <title>Angular JS Views</title>
   <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
   <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-route.min.js"></script>
</head>
<body>
   <h2>AngularJS Sample Application</h2>
   <div ng-app="mainApp">
      <p><a href="#addStudent">Add Student</a></p>
      <p><a href="#viewStudents">View Students</a></p>
      <div ng-view></div>
      <script type="text/ng-template" id="addStudent.jsp">
         <h2> Add Student </h2>
         {{message}}
      </script>
      <script type="text/ng-template" id="viewStudents.jsp">
         <h2> View Students </h2>	    
         {{message}}
      </script>	
   </div>

   <script>
      var mainApp = angular.module("mainApp", ['ngRoute']);
      
      mainApp.config(['$routeProvider', function($routeProvider) {
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
         }]);

         mainApp.controller('AddStudentController', function($scope) {
            $scope.message = "This page will be used to display add student form";
         });

         mainApp.controller('ViewStudentsController', function($scope) {
            $scope.message = "This page will be used to display all the students";
         });
   </script>
<!--    
$routeProvider định nghĩa là một hàm dưới config của mainApp module sử dụng khóa là “$routeProvider”.

$routeProvider.when định nghĩa một địa chỉ URL “/addStudent” được sử dụng để liên kết đến trang “addStudent.jsp”, 
addStudent.jspl nên đặt chung thư mục đường dẫn với trang HTML. Nếu trang HTML không được định nghĩa, ng-template sẽ sử dụng id=”addStudent.jspl”. 
Chúng ta sử dụng ng-template.

"otherwise" được sử dụng để thiết lập view mặc định.

"controller" được để thiết lập controller tương ứng với từng view.
 -->
</body>
</html>