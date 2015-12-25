'use strict';

angular.module('game.status', ['ngRoute', 'base'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/status', {
            templateUrl: 'status/status.html',
            controller: 'StatusCtrl'
        });
    }])

    .controller('StatusCtrl', function ($scope, GamerPropertyService) {
        $scope.lucky = GamerPropertyService.lucky;
        $scope.intelligence = GamerPropertyService.intelligence;
        $scope.life = GamerPropertyService.life;
    });