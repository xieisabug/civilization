'use strict';

angular.module('myApp').config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/status', {
            templateUrl: 'status/status.html',
            controller: 'StatusCtrl'
        });
    }])

    .controller('StatusCtrl', ['$scope', 'GamerPropertyService', function ($scope, GamerPropertyService) {

        $scope.property = GamerPropertyService;

        $scope.doIt = test;

        function test() {
            console.log("put up event");
            $scope.$emit("up", "升级！！！")
        }
    }]);