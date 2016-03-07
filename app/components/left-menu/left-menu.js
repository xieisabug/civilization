(function() {
    'use strict';

    // 左侧菜单
    angular
        .module("myApp.leftMenu", [])
        .directive("leftMenu", LeftMenu);

    /**
     * 左侧菜单
     * @returns {{restrict: string, replace: boolean, templateUrl: string}}
     * @constructor
     */
    function LeftMenu() {
        var directive = {
            restrict: 'E',
            replace: true,
            templateUrl: 'components/left-menu/left-menu.html'
        };

        return directive;
    }
})();