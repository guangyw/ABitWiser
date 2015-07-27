"use strict";

angular.module('myApp').directive('wwaInventory',
    ['dataService',
    function (dataService) {
        return {
            templateUrl: 'app/widgets/wwaInventory/wwaInventoryTemplate.html',
            link: function (scope, el, attrs) {

            }
        };
    }]);