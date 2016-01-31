'use strict';

angular.module('game', [])
    .factory("GameService", ["$interval", "GamePropertyService", function ($interval, GamePropertyService) {

        var $injector = angular.element(document.body).injector();
        var level = {
            current: 0,
            model: null
        };
        var service = {};
        service.init = function () {
            $interval(function () {
                gameTick();
                saveTick();
            }, 1000);

        };

        function gameTick() {
            checkLevel();
            level.model.tick();
        }

        function saveTick() {
            localStorage.setItem("gamer", JSON.stringify(GamePropertyService.gamer));
            localStorage.setItem("system", JSON.stringify(GamePropertyService.system));
        }

        function checkLevel() {
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
    .controller("GameCtrl", ["$scope", "GameService", function ($scope, GameService) {

        GameService.init();

        $scope.$on("up", function (event, text) {
            console.log("parent controller");
            $scope.$broadcast("achievementLevelUp", text);
        });

    }]);