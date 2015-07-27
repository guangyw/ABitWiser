/**
 * Created by guangyw on 7/22/15.
 */

'use strict';

(function(bwMenu) {
    bwMenu.controller('bwMenuController', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.showMenu = true;
        $scope.isVertical = true;
        $scope.showMenu = true;
        $scope.allowHorizontalToggle = true;
        this.setActiveElement = function(el) {
            $scope.activeElement = el;
        };

        this.setRoute = function(route) {
            $rootScope.$broadcast('bw-menu-item-selected-event', {route: route});
        };

        this.getActiveElement = function() {
            return $scope.activeElement;
        };

        this.isVertical = function() {
            return $scope.isVertical;
        };

        this.setOpenMenuScope = function(scope) {
            $scope.openMenuScope = scope;
        };

        $scope.$on('bw-menu-show', function(evt, data) {
            $scope.showMenu = data.show;
            $scope.allowHorizontalToggle = data.allowHorizontalToggle;
            //$scope.isVertical = data.isVertical;
        });

        $scope.toggleMenuOrientation = function() {
            if ($scope.openMenuScope) {
                $scope.openMenuScope.closeMenu();
            }
            $scope.isVertical = !$scope.isVertical;
            $rootScope.$broadcast('bw-menu-orientation-changed-event', {isMenuVertical: $scope.isVertical});
        };

        angular.element(document).bind('click', function(e) {
            if ($scope.openMenuScope && !$scope.isVertical) {
                if ($(e.target).parent().hasClass('bw-selectable-item')) {
                    return;
                }
                $scope.$apply(function() {
                   $scope.openMenuScope.closeMenu();
                });
                e.preventDefault();
                e.stopPropagation();
            }
        });
    }]);

}(angular.module('bwMenu')));