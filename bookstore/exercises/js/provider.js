/**
 * Created by huhaoshuang on 2016/6/28.
 */
var myModule = angular.module('myModule',[]);
myModule.provider('HelloAngular',function(){
    return {
        $get:function(){
            var name = 'imooc';
            function getName(){
                return name;
            }
            return {
                getName:getName
            }
        }
    }
});
myModule.controller('myController',['$scope','HelloAngular',function($scope,helloAngular){
    $scope.greeting = {
        text:'Hello AngularJS'
    };
    $scope.gameName = helloAngular.getName();
}]);
