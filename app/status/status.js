'use strict';

/**
 * 状态页面
 *
 * 用于展示玩家的各种属性
 */
angular.module('myApp')
    .controller('StatusCtrl', ['$scope', 'GamePropertyService', function ($scope, GamePropertyService) {

        $scope.property = GamePropertyService.gamer;

        $scope.doIt = test;

        function test() {
            console.log("put up event");
            $scope.$emit("up", "升级！！！");
        }
    }]);