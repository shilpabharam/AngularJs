var app = angular.module("app",[])

app.controller("studentController",function($scope,$http){
  
var url="data.txt"; 
console.log(url)
   $http.get('data.txt').then( function(response) { 
						console.log(response)
                           $scope.students = response; 
                        }); 
 
})