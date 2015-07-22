/**
 * Created by guangyw on 7/22/15.
 */
'use strict';


(function(bwMenu) {
    bwMenu.directive('bwMenu', function() {
        return {
            scope: {
            },
            //restrict: 'AE',
            transclude: true,
            templateUrl: 'ext-modules/bwMenu/bwMenuTemplate.html',
            controller: 'bwMenuController',
            link: function(scope, el, attr) {

            }
        }
    });
}(angular.module('bwMenu')));