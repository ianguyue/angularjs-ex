/**
 * Created by huhaoshuang on 2016/6/22.
 */
var userInfoModule = angular.module('UserInfoModule',[]);
userInfoModule.controller('UserInfoCtrl',['$scope','$injector',function($scope,$injector){
    $scope.userInfo = {
        email:'1259962386@qq.com',
        password:'123456',
        autoLogin:true
    }
    console.log($injector);
    console.log($injector.annotate(function(arg0,arg1){}));
}]);

//注入器$injector的练习
// console.log(userInfoModule);
// console.log(angular);
var counter = 0;
for( var p in angular){
    counter ++;
    if(angular.isFunction(angular[p])){
        // console.log('property-->'+p);
    }else{
        // console.log('property-->'+p+'-->'+angular[p]);
    }
}
// console.log(counter);
var injector = angular.injector();
// console.log(injector);
function demo(){
    console.log('This is a demo!');
}
console.log(demo.toString());
