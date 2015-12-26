/**
 * 人物的属性相关的service
 */
angular.module("base",[]).factory("GameService", ["$interval", "GamerPropertyService", function($interval, GamerPropertyService) {

    var service = {};
    service.init = function() {
        $interval(function(){
            gameTick();
        }, 1000);
    };

    function gameTick() {
        GamerPropertyService.life += 0.1;
    }
    return service;
}]);