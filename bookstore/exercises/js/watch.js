/**
 * Created by huhaoshuang on 2016/6/29.
 */
var myModule = angular.module('myModule',[]);
myModule.controller('myCtrl',['$scope',function($scope){
    $scope.$watch('name',function(){
        console.log('...')
    })
}]);