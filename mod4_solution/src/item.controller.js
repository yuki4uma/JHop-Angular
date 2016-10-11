(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemController', ItemController)

    ItemController.$inject = ['response'];

    function ItemController(response) {
        var categoryItem = this;
        categoryItem.category = response.data.category;
        categoryItem.items = response.data.menu_items;
    }
})();
