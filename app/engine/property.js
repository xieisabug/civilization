/**
 * 人物的属性相关的service
 */
angular.module("base",[]).factory("GamerPropertyService", function() {

    var service = {};
    service.life = 0.1;//生命力
    service.intelligence = 0.1; //智慧
    service.lucky = 0.1; //幸运

    return service;
});