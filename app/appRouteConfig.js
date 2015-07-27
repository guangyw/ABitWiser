'use strict';

(function(app) {
    app.config(['$routeProvider', function($routeProvider) {
        var routes = [
            {
                url: '/dashboard',
                config: {
                    template: '<abw-dashboard></abw-dashboard>'
                }
            },
            {
                url: '/locations',
                config: {
                    template: '<abw-locations></abw-locations>'
                }
            },
            {
                url: '/guides',
                config: {
                    template: '<abw-guides></abw-guides>'
                }
            }
        ];
        routes.forEach(function(route) {
            $routeProvider.when(route.url, route.config);
        });

        $routeProvider.otherwise({redirectTo: '/dashboard'});
    }]);
} (angular.module('myApp')));