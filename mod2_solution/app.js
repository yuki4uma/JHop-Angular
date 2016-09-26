(function () {
'use strict';

// Declare Module
angular.module("ShoppingListCheckOff", [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// Cart Items
var cart = [
  {name: "chocolate chip cookies", quantity: 30},
  {name: "vanilla cookies", quantity: 14},
  {name: "hazelnut cookies", quantity: 5},
  {name: "chocolate chunk cookies", quantity: 15},
  {name: "cookies", quantity: 4},
  {name: "ice cream cookies", quantity: 45},
  {name: "donut cookies", quantity: 8},
  {name: "cookies n' cream", quantity: 20},
  {name: "cookie dough cookies", quantity: 2}
];

// Shopping List Service
function ShoppingListCheckOffService() {
    var service = this;

    // Base arrays
    var toBuyShoppingCart = cart;
    var boughtAtCheckout = [];

    // Transfer Item Data
    service.shareData = function (indexx) {
      var shoppingCart = toBuyShoppingCart[indexx];
      boughtAtCheckout.push(shoppingCart);
      toBuyShoppingCart.splice(indexx, 1);
    };

    // To Buy Items
    service.getToBuyCart = function () {
      return toBuyShoppingCart;
    };
    // Bought Items
    service.getCheckoutCart = function () {
      return boughtAtCheckout;
    };
}

// To Buy Controller
ToBuyController.$inject['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyCart = this;

  // populate cart
  toBuyCart.cart = ShoppingListCheckOffService.getToBuyCart();

  // transfer data items
  toBuyCart.shareData = function (itemIndex){
    ShoppingListCheckOffService.shareData(itemIndex);
  };

  //error message
  toBuyCart.emptyCart = function () {
    return toBuyCart.cart.length === 0;
    console.log(toBuyCart.cart.length);
  };
}

//Already Bought Controller
AlreadyBoughtController.$inject['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtCheckout = this;

  // populate cart
  boughtCheckout.cart = ShoppingListCheckOffService.getCheckoutCart();

  // error message
  boughtCheckout.emptyCart = function () {
     return boughtCheckout.cart.length === 0;
  };
}

})();
