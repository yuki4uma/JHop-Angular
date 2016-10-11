(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];


    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/html_templates/home.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'src/html_templates/categories.html',
                controller: 'CategoriesController as categoryCtrl',
                resolve: {
                    response: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            .state('items', {
                url: '/items/{catShortName}',
                templateUrl: 'src/html_templates/item.html',
                controller: 'ItemController as itemsCtrl',
                resolve: {
                    response: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.catShortName);
                    }]
                }
            })
    }
})();
