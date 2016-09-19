(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.checkTooMuch = "";
  $scope.LunchMessage = "";

  $scope.checkLunch = function () {
      // if textbox is empty
      if ($scope.checkTooMuch === "") {
          $scope.messageStyle = { "color" : "red" };
          $scope.LunchMessage = "Please enter data first";
      } else {
        //check number of items
        if ($scope.checkTooMuch.split(",").length <= 3) {
          $scope.messageStyle = { "color" : "green" };
          $scope.LunchMessage = "Enjoy !";
        } else if ($scope.checkTooMuch.split(",").length > 3){
          $scope.messageStyle = { "color" : "green" };
          $scope.LunchMessage = "Too much !";
        } else {
          $scope.LunchMessage = "Error";
        }
      }
  };
}

})();
