/**
 * Created by Aviv on 01-Jun-17.
 */
(function() {
    'use strict';
    angular.module('navBar', [])
        .controller('AppCtrl', AppCtrl);

    function AppCtrl($scope) {
        $scope.currentNavItem = 'page1';
    }
})();