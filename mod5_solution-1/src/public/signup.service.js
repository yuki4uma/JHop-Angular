(function() {
'use strict'

angular.module('public')
.service('SignUpService', SignUpService);

SignUpService.$inject = ['$http', 'ApiPath']
function SignUpService($http,ApiPath){

	var service = this;

    service.user= {};
	service.save = function(addedUser){

		service.user.firstname = addedUser.firstname;
		service.user.lastname = addedUser.lastname;
		service.user.email = addedUser.email;
		service.user.favFood = addedUser.favFood;
		service.user.phone = addedUser.phone;


	}

	service.getUser = function(){

		return service.user;

	}

	service.getMenuItem = function(shortname){
      return $http.get(ApiPath + "/menu_items/" + shortname + ".json").then(function (response) {
      service.menuItem = response.data;
      return service.menuItem
    },

    function(error){
    	service.menuItem = error;

    	return service.menuItem ;
    }
    );


  };

}


})();
