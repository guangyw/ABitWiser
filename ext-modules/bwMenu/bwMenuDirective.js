/**
 * Created by guangyw on 7/22/15.
 */
'use strict';


(function(bwMenu) {
    bwMenu.directive('bwMenu', ['$timeout', function($timeout) {
        return {
            scope: {
            },
            //restrict: 'AE',
            transclude: true,
            templateUrl: 'ext-modules/bwMenu/bwMenuTemplate.html',
            controller: 'bwMenuController',
            link: function(scope, el, attr) {
                var item = el.find('.bw-selectable-item:first');
                $timeout(function() {
                    item.trigger('click');
                });
            }
        }
    }]);
}(angular.module('bwMenu')));