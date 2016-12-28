var myApp = angular.module('myApp' ,['ngMessages']);

myApp.controller('mainController' , function($scope,$log,$filter){
  
    $scope.firstName ='shilpa';
    $scope.lastName = ' ' ;
    $scope.selectSub = ' ';
    $scope.subjects = ['chemistry','physics','biology'];
    $scope.gender =' ';
    $scope.date =' ';
    
    
     $scope.lowerCase = function(){
        return $filter('lowercase')($scope.lastName);
    } 
        
    $scope.display = function(){
        //$log.info("firstName  :   " +$scope.firstName);
        $log.log("lastName  :   " +$scope.lastName);
        $log.error("subject :   " +$scope.selectSub);
        $log.warn("Gender  :   " +$scope.gender);
        $log.info("Gender  :   " + $scope.date);
    }
    
    $scope.reset = function(){
        $scope.master = {};
        $scope.user = angular.copy($scope.master);
    }
});
