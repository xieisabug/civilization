/**
 * 人物的属性相关的service
 */
angular.module('game').factory("GamePropertyService", function () {

    //公开的属性
    var service = {
        //系统属性
        system: {},
        //玩家属性
        gamer: {}
    };

    service.gamer.life = 0.1;//生命力
    service.gamer.intelligence = 0.1; //智慧
    service.gamer.power = 0.1; //力量
    service.gamer.agile = 0.1; //敏捷
    service.gamer.lucky = 0.1; //幸运
    service.gamer.pretty = 0.1; //美感
    service.gamer.sense = 0.1; //理性

    service.system.level = 1;//关卡

    //初始化本地存储
    initLocalStorage();

    function initLocalStorage() {
        var gamer = localStorage.getItem("gamer");
        if(gamer) {
            service.gamer = eval('(' + gamer + ')');
            console.log(eval('(' + gamer + ')'));
        } else {
            localStorage.setItem("gamer", JSON.stringify(service.gamer));
        }

        var system = localStorage.getItem("system");
        if(system) {
            service.system = eval('(' + system + ')');
            console.log(eval('(' + system + ')'));
        } else {
            localStorage.setItem("system", JSON.stringify(service.system));
        }


    }

    return service;
});