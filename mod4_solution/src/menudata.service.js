(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService)

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http) {
    var menu = this;

    // return promise
    menu.getItemsForCategory = function (categoryShortName) {
      return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category=',
        params: {
          category: categoryShortName
        }
      });
    };

    // return promise
    menu.getAllCategories = function () {
      return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/categories.json'
      });
    };
}

})();
