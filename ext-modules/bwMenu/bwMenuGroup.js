/**
 * Created by guangyw on 7/27/15.
 */
'use strict';


(function(bwMenu){
    bwMenu.directive('bwMenuGroup', function() {
        return {
            require: '^bwMenu',
            transclude: true,
            scope: {
                label: '@',
                icon: '@'
            },
            templateUrl: 'ext-modules/bwMenu/bwMenuGroupTemplate.html',
            link: function(scope, el, attrs, ctrl) {
                scope.isOpen = false;
                scope.closeMenu = function(){
                    scope.isOpen = false;
                };
                scope.isMenuVertical = function() {
                    return ctrl.isMenuVertical() || el.parents('.bw-subitem-section').length > 0;
                };
                scope.clicked = function( ) {
                    scope.isOpen = !scope.isOpen;
                    if (el.parents('.bw-subitem-section').length == 0) {
                        scope.setSubmenuPosition();
                    }
                    ctrl.setOpenMenuScope(scope);
                };
                scope.setSubmenuPosition = function() {
                    var pos = el.offset();
                    $('.bw-subitem-section').css({'left': pos.left + 20, 'top': 36});
                }
            }
        }
    });

}(angular.module('bwMenu')));