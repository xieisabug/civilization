'use strict';

angular.module('game')
    .factory("Level1", ["GamerPropertyService", function (GamerPropertyService) {

        var service = {};
        service.init = function () {
        };

        service.tick = function() {
            GamerPropertyService.life += 1;
        };

        return service;
    }]);