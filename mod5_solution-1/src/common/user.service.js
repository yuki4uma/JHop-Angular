(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


function UserService() {
  var service = this;
  var userData = '';

  service.saveUserData = function (userData) {
    service.userData = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      phone: userData.phone,
      favDish_short_name: userData.favDish
    };
    // console.log('Saved user data: ');
    // console.log(service.userData);
  }
}

})();
