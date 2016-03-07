'use strict';

/**
 * 第一关卡
 */
angular.module('game')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/era1', {
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
    .controller('Level1Ctrl', ['$scope', 'GamePropertyService', function ($scope, GamePropertyService) {
        $scope.nextLevel = false;
        $scope.form = [
            {
                name: 'cell',
                display: '细胞',
                need: '',
                needCount: 0,
                price: 100
            },
            {
                name: 'head',
                display: '头部',
                need: 'cell',
                needCount: 200,
                price: 5000
            },
            {
                name: 'eyes',
                display: '眼睛',
                need: 'head',
                needCount: 1,
                price: 20000
            },
            {
                name: 'mouse',
                display: '嘴巴',
                need: 'head',
                needCount: 1,
                price: 20000
            }
        ];

        $scope.have = localStorage.getItem("level");
        if (!$scope.have) {
            $scope.have = {
                'cell': 0,
                'head': 0,
                'eyes': 0,
                'mouse': 0
            };
        }


        $scope.buy = function (index) {
            var item = $scope.form[index];
            if (GamePropertyService.gamer.life > item.price) {
                GamePropertyService.gamer.life -= item.price;
                $scope.have[item.name] += 1;
                localStorage.setItem("level", $scope.have);
            }
        }
    }]);