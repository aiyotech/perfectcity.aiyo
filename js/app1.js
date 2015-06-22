var myApp = angular.module('myApp', ['rzModule']);

myApp.controller('PCtrl', function ( $scope ) { 

$scope.sliderValues = {
	parks:5,
	transit:5,
	outdoor:5,
	crime:5,
	employment:5
}

$scope.aboutYou = {


}


window.MYSCOPE = $scope;

$scope.$on('redraw', function() {
	console.log('redraw recieved')
	setTimeout(function(){
		console.log('redraw done')
		$scope.$broadcast('reCalcViewDimensions');
	}, 200);
})

$scope.clicky = function(){
	//just to see if the scope is being updated!
	console.log($scope.sliderValues);
	console.log($scope.aboutYou);
}

$scope.getResult = function() {
	$scope.result = process($scope.sliderValues, $scope.aboutYou);
	$('#result-image').attr('src', $scope.result.IMAGE);
	$.adaptiveBackground.run();

	// $('body').css('background-image', 'url('+$scope.result.IMAGE+')');

// 	var cityToColorMap = {
// 	'EDMONTON': '#E89943',
// 	'HAMILTON': '#49642E',
// 	'MONTREAL': '#2E425E',
// 	'OTTAWA': '#635D4C',
// 	'TORONTO': '#4E0CAC',
// 	'VANCOUVER': '#214C71',
// 	'CALGARY': '#C11903',
// 	'WINNIPEG': '#3D4468',
// 	'SASKATOON': '#89471F'
// }
	// $('body').css('background-color', cityToColorMap[$scope.result.CITYNAME] );

	console.log($scope.result);
}
});

