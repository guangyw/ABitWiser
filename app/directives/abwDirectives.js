(function(app) {
    app.directive('abwDashboard', [function() {
        return {
            scope: {
                //only for accepting attribute from caller
            },
            template: '<bw-dashboard></bw-dashboard>',
            link: function(scope) {
                scope.title = "A bitwiser dashboard";
                scope.gridsterOpts = {
                    columns: 12,
                    margins: [20, 20],
                    outerMargin: false,
                    pushing: true,
                    floating: true,
                    swapping: false
                };
                scope.widgets = [
                    {
                        title: 'First',
                        sizeX: 3,
                        sizeY: 3,
                        row: 0,
                        col: 0,
                        template: '<wwa-temperature></wwa-temperature>',
                        widgetSettings:  {
                            id: 1000
                        }
                    }
                    //{
                    //    title: 'Second',
                    //    sizeX: 2,
                    //    sizeY: 4,
                    //    row: 0,
                    //    col: 5
                    //}
                ];
            }
        }
    }]);

    app.directive('abwGuides', [function() {
        return {
            scope: {

            },
            template: '<h1>Guide Page</h1>'
        }
    }]);
    app.directive('abwLocations', [function() {
        return {
            scope: {

            },
            template: '<h1>Locations</h1>'
        }
    }]);



} (angular.module('myApp')))