'use strict';

angular.module('game')
    .factory("Level1", ["GamePropertyService", function (GamePropertyService) {

        var service = {};
        service.init = function () {
        };

        service.tick = function() {
            GamePropertyService.gamer.life += 1;
        };

        return service;
    }]);