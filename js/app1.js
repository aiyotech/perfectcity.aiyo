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