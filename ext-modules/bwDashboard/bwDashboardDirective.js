'use strict';

(function(dashboard) {
    dashboard.directive('bwDashboard', function() {
        return {
            //Do nothing to inherit scope
            templateUrl: 'ext-modules/bwDashboard/bwDashboardTemplate.html'
        };
    });
}(angular.module('bwDashboard')));