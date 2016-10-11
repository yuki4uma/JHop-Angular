// items component
(function () {
    'use strict';

    angular.module('data')
        .component('items', {
            templateUrl: 'src/html_templates/items.template.html',
            bindings: {
                items: '<',
                category: '<'
            }
        })
})();
