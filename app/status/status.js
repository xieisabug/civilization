'use strict';

angular.module('game.status', ['ngRoute', 'base'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/status', {
            templateUrl: 'status/status.html',
            controller: 'StatusCtrl'
        });
    }])

    .controller('StatusCtrl', function ($scope, GamerPropertyService) {

        $scope.property = GamerPropertyService;

        $scope.test = test;

        function test() {
            GamerPropertyService.life += 10;
            console.log(GamerPropertyService.life);
            console.log($scope.life);
        }
    });