'use strict';

/**
 * 第一关卡
 */
angular.module('game')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/level1', {
            templateUrl: 'level/level1/level1.html',
            controller: 'Level1Ctrl'
        });
    }])
    .factory("Level1", ["GamePropertyService", function (GamePropertyService) {

        var service = {};
        service.init = function () {
        };

        service.tick = function () {
            GamePropertyService.gamer.life += 1;
        };

        return service;
    }])
    .controller('Level1Ctrl', ['$scope', function ($scope) {
        $scope.buy = function (position) {
            console.log(position);
        }
    }]);