var myApp = angular.module('myApp' ,['ngMessages']);

myApp.controller('mainController' , function($scope,$log){
    $log.log("hello");
    $log.info("hello");
    $log.error("hello");
    $log.warn("hello");
    $log.debug("hello");
    
    $scope.character = 5;
	
	$scope.map = {
      center: {
        latitude: 21.0000,
        longitude: 78.0000
      },
      zoom: 4,
      events: {
        click: function(mapModel, eventName, originalEventArgs,ok) {
          var e = originalEventArgs[0]; 

            objOneDevice.dev_latitude = e.latLng.lat();
            objOneDevice.dev_longitude = e.latLng.lng();

            $scope.templatedInfoWindow.show = true;

        }
      }
    };
    $scope.options = {
      scrollwheel: true
    };
    
    
 
});
