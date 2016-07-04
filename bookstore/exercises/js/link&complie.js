/**
 * Created by huhaoshuang on 2016/6/28.
 */
var myModule = angular.module('myModule',[]);
myModule.directive('alotofhello',function(){
    return {
        resrtict:'A',
        compile:function(el,attrs,transclude){
            var tpl = el.children().clone();
            console.log(tpl);
            for(var i =0;i<attrs.alotofhello-1;i++){
                el.append(tpl.clone());
            }
            return function(scope,el,attrs,controller){
                console.log('指令链接。。。');
            }
        }
    }
});