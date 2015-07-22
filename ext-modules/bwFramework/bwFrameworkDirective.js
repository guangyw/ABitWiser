/**
 * Created by guangyw on 7/18/15.
 */

'use strict';


(function(bwf) {
    bwf.directive('bwFramework', function() {
        return {
            transclude: true,
            scope: {
                title: '@',
                subtitle: '@',
                iconFile: '@'
            },
            controller: 'bwFrameworkController',
            templateUrl: 'ext-modules/bwFramework/bwFrameworkTemplate.html'
        }
    })
}(angular.module('bwFramework')));
