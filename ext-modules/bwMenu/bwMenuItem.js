/**
 * Created by guangyw on 7/22/15.
 */
'use strict';

(function(bwMenu) {
    bwMenu.directive('bwMenuItem', function() {
        return {
            //restrict: 'AE',
            require: '^bwMenu',
            scope: {
                label: '@',
                icon: '@'
            },
            transclude: true,
            templateUrl: 'ext-modules/bwMenu/bwMenuItemTemplate.html',
            controller: 'bwMenuController',
            link: function(scope, el, attr, ctrl) {

            }
        }
    });
}(angular.module('bwMenu')));