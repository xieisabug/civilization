'use strict';

angular.module('myApp.view2', ['ngRoute', 'base'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/system', {
    templateUrl: 'system/system.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);