var app = angular.module("helloApp", [])

app.controller("helloCntrl", function($scope){	
	$scope.tasks = [];
	
	$scope.searchEnter = function(){
		if(event.which == 13&& $scope.task != ""){
			$scope.addTask();
		}
			//console.log($scope.task);
	}
	
	$scope.addTask= function(){
		$scope.tasks.push({'taskMsg':$scope.task, 'status':false});
		console.log($scope.tasks);
		
		localStorage['tasksList'] = JSON.stringify($scope.tasks);
		console.log(localStorage);
	}
	
	$scope.contentEdit = function(msg){
		
		for(i=0;i<$scope.tasks.length;i++){
			if($scope.tasks[i].taskMsg == msg){
				$scope.tasks[i].taskMsg == event.target.innerText;
			}
		}
		
		localStorage['tasksList'] = JSON.stringify($scope.tasks);
		
		console.log($scope.tasks);
		
		event.target.contentEditable = event.target.contentEditable == 
		"false" ?  "true" :  "false";
	}
	
	$scope.enterAgain = function(msg){
		if(event.which == 13&& msg != ""){
			$scope.contentEdit();
	   }
	}
	
});