'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'game',
    'ngRoute',
    'myApp.version',
    'myApp.leftMenu'
]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/status'});
}]);
