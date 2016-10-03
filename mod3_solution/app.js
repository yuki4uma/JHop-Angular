(function () {
  'use strict'

  //Declare Module
  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)
    .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com/menu_items.json')

  // Controller
  NarrowItDownController.$inject = ['MenuSearchService']
  function NarrowItDownController(MenuSearchService) {
    var narrowedDown = this;
    narrowedDown.found = [];
    narrowedDown.searchTerm = "";
    narrowedDown.errorMessage = false;

    narrowedDown.search = function () {
      if (narrowedDown.searchTerm.length == 0) {
        narrowedDown.errorMessage = true;
        console.log(narrowedDown.found.length)
      }
      else {
        var promise = MenuSearchService.getMatchedMenuItems(narrowedDown.searchTerm)
        promise.then(function (response) {
          narrowedDown.found = response;
          console.log(narrowedDown.found.length)
          narrowedDown.errorMessage = (narrowedDown.found.length == 0);
        }).catch(function (error) {
          console.log("ERROR!");
        });
      };
    };

    narrowedDown.removeItem = function (itemIndex) {
      narrowedDown.found.splice(itemIndex, 1);
    };

  }

  // Directive
  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'found.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: NarrowItDownController,
      controllerAs: 'foundResults',
      bindToController: true,
    };

    return ddo;
  }

  // Service
  MenuSearchService.$inject = ['$http', 'ApiBasePath']
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: ApiBasePath
      })
        .then(function (result) {
          var foundItems = [];
          // iterate through data
          for (var i = 0; i < result.data.menu_items.length; i++) {
            var item = result.data.menu_items[i];
            if (item.description.toLowerCase().indexOf(searchTerm) !== -1) {
              foundItems.push(item);
            }
          }
          return foundItems;
        }).catch(function (error) {
          console.log("ERROR!");
        });

    }
  }
})();
