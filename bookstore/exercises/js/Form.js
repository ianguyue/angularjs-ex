/**
 * Created by huhaoshuang on 2016/6/22.
 */
var userInfoModule = angular.module('UserInfoModule',[]);
userInfoModule.controller('UserInfoCtrl',['$scope',function($scope){
    $scope.userInfo = {
        email:'1259962386@qq.com',
        password:'123456',
        autoLogin:true
    }
}]);





