(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['response'];
    function CategoriesController(response) {
        var categoryList = this;
        categoryList.allAvailableCategories = response.data;
    };
})();
