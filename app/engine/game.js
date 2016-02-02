'use strict';

/**
 * 游戏的主入口
 *
 * 游戏的数据更新、进度推进、事件的分发
 */
angular.module('game', ["ngMaterial", "ngRoute"])
    .factory("GameService", ["$interval", "GamePropertyService", function ($interval, GamePropertyService) {

        //注入服务，必须这样写才能获取到当前注入
        var $injector = angular.element(document.body).injector();
        //关卡
        var level = {
            current: 0,
            model: null
        };

        //公开内容
        var service = {};
        service.init = function () {
            //每秒进行循环
            $interval(function () {
                //游戏逻辑
                gameTick();
                //保存逻辑
                saveTick();
            }, 1000);

        };

        function gameTick() {
            //检查是不是过关
            checkLevel();
            //关卡逻辑
            level.model.tick();
        }

        function saveTick() {
            //保存玩家属性
            localStorage.setItem("gamer", JSON.stringify(GamePropertyService.gamer));
            //保存系统属性
            localStorage.setItem("system", JSON.stringify(GamePropertyService.system));
        }

        function checkLevel() {
            //如果过关了，则更换关卡模块，初始化关卡
            if (GamePropertyService.system.level != level.current) {
                switch (GamePropertyService.system.level) {
                    case 1:
                        level.model = $injector.get("Level1");
                        break;
                }
                level.current = GamePropertyService.system.level;
                level.model.init();
            }
        }

        return service;
    }])
    .controller("GameCtrl",
        ["$scope", "GameService", "GamePropertyService", "$location",
            function ($scope, GameService, GamePropertyService, $location) {

        GameService.init();
        $location.path("/era" + GamePropertyService.system.level);
        //分发事件
        $scope.$on("up", function (event, text) {
            console.log("parent controller");
            $scope.$broadcast("achievementLevelUp", text);
        });

    }]);