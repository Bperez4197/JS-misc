// importing named functions/variables
// Importing Module
// import {
//   addToCart,
//   qt,
//   totalPrice as price,
// } from "../Modern JS/shoppingCart.js";
// addToCart("bananas", 10);
// console.log(price);
// console.log(qt);

// Importing everything from a file /////
// import * as ShoppingCart from "./shoppingCart.js";

// console.log("importing module");
// ShoppingCart.addToCart("bread", 3);
// console.log(ShoppingCart.totalPrice);

// Importing default /////
import add, { cart } from "./shoppingCart.js";
add("pizza", 2);
console.log(cart);
