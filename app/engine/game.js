'use strict';

angular.module('game', [])
    .factory("GameService", ["$interval", "GamerPropertyService", function ($interval, GamerPropertyService) {

        var $injector = angular.element(document.body).injector();
        var level = {
            current: 0,
            model: null
        };
        var service = {};
        service.init = function () {
            $interval(function () {
                gameTick();
            }, 1000);
        };

        function gameTick() {
            checkLevel();
            level.model.tick();
        }

        function checkLevel() {
            if (GamerPropertyService.game.level != level.current) {
                switch (GamerPropertyService.game.level) {
                    case 1:
                        level.model = $injector.get("Level1");
                        break;
                }
                level.current = GamerPropertyService.game.level;
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