'use strict';

angular.module('game',[])
    .factory("GameService", ["$interval", "GamerPropertyService", function ($interval, GamerPropertyService) {

        var service = {};
        service.init = function () {
            $interval(function () {
                gameTick();
            }, 1000);
        };

        function gameTick() {
            GamerPropertyService.life += 0.1;
        }

        return service;
    }])
    .controller("GameCtrl", ["$scope", function ($scope) {

        $scope.$on("up", function (event, text) {
            console.log("parent controller");
            $scope.$broadcast("achievementLevelUp", text);
        });

    }]);