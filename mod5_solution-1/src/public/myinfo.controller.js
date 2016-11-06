(function() {


angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignUpService', 'ApiPath'];
function MyInfoController(SignUpService, ApiPath){

  var $ctrl = this;
  $ctrl.basePath = ApiPath;
  $ctrl.user = SignUpService.getUser();

  if($ctrl.user.favFood !== undefined){
  SignUpService.getMenuItem($ctrl.user.favFood).then(function(menuItem){


  	$ctrl.menuItem = menuItem;

  });



  }




}


})();
