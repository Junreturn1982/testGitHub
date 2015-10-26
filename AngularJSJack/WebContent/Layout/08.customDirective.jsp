<html>
<head>
   <title>Angular JS Custom Directives</title>
</head>
<body>
   <h2>AngularJS Sample Application</h2>
   <div ng-app="mainApp" ng-controller="StudentController">
		<student name="Mahesh"></student><br/>
		<student name="Piyush"></student>
   </div>
   <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
   <script>
   var mainApp = angular.module("mainApp", []);

 //Create a directive, first parameter is the html element to be attached.	  
 //We are attaching student html tag. 
 //This directive will be activated as soon as any student element is encountered in html
 mainApp.directive('student', function() {
    //define the directive object
    var directive = {};
    //restrict = E, signifies that directive is Element directive
    directive.restrict = 'E';
    //template replaces the complete element with its text. 
    directive.template = "Student: <b>{{student.name}}</b> , Roll No: <b>{{student.rollno}}</b> <br>";
    //scope is used to distinguish each student element based on criteria.
    directive.scope = {
        student : "=name"
    }
    //compile is called during application initialization. AngularJS calls it once when html page is loaded.
    directive.compile = function(element, attributes) {
       element.css("border", "1px solid #cccccc");
 	  //linkFunction is linked with each element with scope to get the element specific data.
       var linkFunction = function($scope, element, attributes) {
           //element.jspl("Student: <b>"+ $scope.student.name +"</b> , Roll No: <b>"+ $scope.student.rollno +"</b><br/>");
           element.css("background-color", "#ff00ff");
       }
       return linkFunction;
    }
    return directive;
 });
	  
      mainApp.controller('StudentController', function($scope) {
            $scope.Mahesh = {};
            $scope.Mahesh.name = "Mahesh Parashar";
            $scope.Mahesh.rollno  = 1;

            $scope.Piyush = {};
            $scope.Piyush.name = "Piyush Parashar";
            $scope.Piyush.rollno  = 2;
      });
      
   </script>
</body>
</html>