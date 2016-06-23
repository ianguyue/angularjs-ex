/**
 * Created by huhaoshuang on 2016/6/21.
 */
var bookStoreApp = angular.module("bookStoreApp",["ngRoute",'bookStoreCtrls','bookStoreDirectives']);
bookStoreApp.config(function($routeProvider){
    $routeProvider.when('/hello',{
        templateUrl:'tpls/hello.html',
        controller:'HelloCtrl'
    }).when('/list',{
        templateUrl:'tpls/list.html',
        controller:'BookListCtrl'
    }).otherwise({
        redirectTo:'/hello'
    })
});
