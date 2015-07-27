/**
 * Created by guangyanwang on 7/27/15.
 */
'use strict';

(function(dashboard) {
    dashboard.directive('bwWidgetBody', ['$compile', function($compile) {
        return {
            templateUrl: 'ext-modules/bwDashboard/bwWidgetBodyTemplate.html',
            link: function(scope, el, attrs) {
                var newElement = angular.element(scope.item.template);
                el.append(newElement);
                $compile(newElement)(scope);
            }
        }
    }]);
}(angular.module('bwDashboard')));