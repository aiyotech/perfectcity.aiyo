var myApp = angular.module('myApp', []);

myApp.controller('CalcCtrl', function ($scope) {
    var num = 0.0;
    $scope.qty = new Quantity(12);
    $scope.num = num;
});

function Quantity(numOfPcs) {
    var qty = numOfPcs;

    this.__defineGetter__("qty", function () {
        return qty;
    });

    this.__defineSetter__("qty", function (val) {        
        val = parseInt(val);
        qty = val;
    });

}

myApp.directive("rateslider", function(){
    return {
        restrict:"E",
        scope:{
            parameter: '@'
        },//this gives each <book> an isolated scope  
        controller: function($scope){
            var num = 0.0;
            $scope.qty = new Quantity(12);
            $scope.num = num;
        },
        template: '<div class = "rateslider"> <span id ="parameter"> {{parameter}}: </span> <span id = "slider"> <input type="number" min="0" ng-model="qty.qty" size="20" id="pcs"/>'+
                '<input type="range" min="0" max="10" ng-model="qty.qty"/> </span> </div>',
        //A link function for when the <rateslider> loads
        link: function(scope, element){
            //for demo purposes rolling over logs the properties of the book.
            element.bind("mouseenter", function(){
                console.log(scope.properties);
            })
        }
    }
});