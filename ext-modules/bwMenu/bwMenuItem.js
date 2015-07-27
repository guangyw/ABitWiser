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
                icon: '@',
                route: '@'
            },
            transclude: true,
            templateUrl: 'ext-modules/bwMenu/bwMenuItemTemplate.html',
            controller: 'bwMenuController',
            link: function(scope, el, attr, ctrl) {
                scope.isActive = function() {
                    return el === ctrl.getActiveElement();
                };
                el.on('click', function (evt) {
                    evt.stopPropagation();
                    evt.preventDefault();
                    scope.$apply(function() {
                        ctrl.setActiveElement(el);
                        ctrl.setRoute(scope.route);
                    });
                })
            }
        }
    });
}(angular.module('bwMenu')));