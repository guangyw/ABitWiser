/**
 * Created by guangyw on 7/18/15.
 */
'use strict';

(function(bwf) {
    bwf.controller('bwFrameworkController', ['$scope', '$window', '$timeout', '$rootScope', function($scope, $window, $timeout, $rootScope) {
        $scope.isMenuButtonVisible = true;
        $scope.isMenuVisible = true;
        $scope.isMenuVertical = true;

        $($window).on('resize.bwFramework', function() {
            $scope.$apply(function() {
                checkWidth();
            });
        });

        $scope.$on("$destroy", function() {
            $($window).off('resize.bwFramework');
        });

        var checkWidth = function() {
            var width = $($window).innerWidth();
            $scope.isMenuVisible = (width > 768);
            $scope.isMenuButtonVisible = !$scope.isMenuVisible;
        };

        $scope.$on('bw-menu-item-selected-event', function(evt, data) {
            $scope.routeString = data.route;
        });

        $scope.$on('bw-menu-orientation-changed-event', function(evt, data) {
            $scope.isMenuVertical = data.isMenuVertical;
        });


        
        $scope.menuButtonClicked = function () {
            $scope.isMenuVisible = !$scope.isMenuVisible;
            broadcastMenuState();
            //$scope.$apply();
        };

        var broadcastMenuState = function() {
            $rootScope.$broadcast('bw-menu-show',  {
                show: $scope.isMenuVisible
            });
        };

        $timeout(function() {
            checkWidth();
        }, 0);
    }]);
}(angular.module('bwFramework')));