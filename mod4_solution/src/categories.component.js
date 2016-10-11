(function () {
    'use strict';
    // categories component
    angular.module('data')
        .component('categories', {
            templateUrl: 'src/html_templates/categories.template.html',
            bindings: {
                categories: '<'
            }
        })
})();
