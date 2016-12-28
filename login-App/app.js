var app = angular.module("helloApp" , [])

app.controller("helloCntrl", function($rootScope,$scope){
	
		$scope.user = $scope.username;
		$scope.pass = $scope.password;
	$scope.submit = function(){
		if($scope.username == 'shilpa'  && $scope.password == "shilpa"){
			$scope.loggedIn = true
				alert("login succsess");
			}
			else{
				alert("fail");
			}
    }

});


