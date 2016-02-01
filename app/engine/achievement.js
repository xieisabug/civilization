'use strict';

/**
 * 成就系统
 *
 * 用于展示所获得的成就
 */
angular.module('game').controller('AchievementController', function ($scope) {

    $scope.achievement = [];

    $scope.$on('achievementLevelUp', function (event, text) {
        console.log("up event");
        //自定义事件，这样星球就被摧毁了
        $scope.achievement.push(text)
    });
});