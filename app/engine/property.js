/**
 * 人物的属性相关的service
 */
angular.module('game').factory("GamerPropertyService", function() {

    var service = {};
    service.life = 0.1;//生命力
    service.intelligence = 0.1; //智慧
    service.power = 0.1; //力量
    service.agile = 0.1; //敏捷
    service.lucky = 0.1; //幸运
    service.pretty = 0.1; //美感
    service.sense = 0.1; //理性

    return service;
});