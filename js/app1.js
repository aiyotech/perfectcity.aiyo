var myApp = angular.module('myApp', ['rzModule']);

myApp.controller('PCtrl', function ( $scope ) { 

$scope.sliderValues = {
	parks:5,
	unemployment:5,
	business:5
}

$scope.aboutYou = {


}

$scope.clicky = function(){
	//just to see if the scope is being updated!
	console.log($scope.sliderValues);
	console.log($scope.aboutYou)
}

$scope.getResult = function() {
	var result = process($scope.sliderValues, $scope.aboutYou);
	console.log(result);
}
});

