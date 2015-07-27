/**
 * Created by guangyw on 7/22/15.
 */

'use strict';

(function(bwMenu) {
    bwMenu.controller('bwMenuController', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.showMenu = true;
        this.setActiveElement = function(el) {
            $scope.activeElement = el;
        };

        this.setRoute = function(route) {
            $rootScope.$broadcast('bw-menu-item-selected-event', {route: route});
        };

        this.getActiveElement = function() {
            return $scope.activeElement;
        };

        $scope.$on('bw-menu-show', function(evt, data) {
            $scope.showMenu = data.show;
        });
    }]);

}(angular.module('bwMenu')))