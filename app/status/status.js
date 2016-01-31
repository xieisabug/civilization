'use strict';

angular.module('myApp').config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/status', {
            templateUrl: 'status/status.html',
            controller: 'StatusCtrl'
        });
    }])

    .controller('StatusCtrl', ['$scope', 'GamePropertyService', function ($scope, GamePropertyService) {

        $scope.property = GamePropertyService.gamer;

        $scope.doIt = test;

        function test() {
            console.log("put up event");
            $scope.$emit("up", "升级！！！")
        }
    }]);