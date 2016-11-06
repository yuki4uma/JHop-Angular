(function () {
    'use strict'

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['SignUpService'];
    function SignUpController(SignUpService) {
        var $ctrl = this;
        // user data
        $ctrl.user = {
            firstname: undefined,
            lastname: undefined,
            email: undefined,
            favFood: undefined,
        };

        $ctrl.submitValues = function () {
            SignUpService.getMenuItem($ctrl.user.favFood).then(function (menuItem) {
                $ctrl.menuItem = menuItem;

                if (menuItem.status !== 500) {
                    SignUpService.save($ctrl.user);
                    $ctrl.updated = true;
                }
                else {
                    $ctrl.updated = false;
                    $ctrl.error = true;
                }
            });
        }
    }
})();
