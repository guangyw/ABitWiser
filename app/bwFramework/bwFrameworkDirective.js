/**
 * Created by guangyw on 7/18/15.
 */

'use strict';


(function(bwf) {
    bwf.directive('bwFramework', function() {
        return {
            transclude: false,
            scope: {

            },
            controller: 'bwFrameworkController',
            templateUrl: 'bwFramework/bwFrameworkTemplate.html'
        }
    })
}(angular.module('bwFramework')));
