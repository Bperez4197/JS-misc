//////////////////// IMPORTS ARE NOT COPIES OF THE EXPORTS, THEY ARE POINTERS TO THE EXACT SAME VARIABLES IN MEMORY ////////////////////////////////// ////////

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
import * as ShoppingCart from "./shoppingCart.js";

// console.log("importing module");
// ShoppingCart.addToCart("bread", 3);
// console.log(ShoppingCart.totalPrice);

// Importing default /////
// import add, { cart } from "./shoppingCart.js";
// add("pizza", 2);
// console.log(cart);

//////////// Top-level Await //////////////////////////////////////////////////////////////////////////////

// // Only possible to use await outside of an async function in modules //////////////////////////////////
// console.log("Start Fetching");
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);
// console.log("something");

// // Async functions always return a promise //////////////////////////
// const getLastPost = async function () {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();

// // // Not very clean
// // lastPost.then((last) => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// /// Module Pattern /////////////////////////////////////////////////////////////////
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addtoCart = function (product, quantity) {
//     cart.push(product, quantity);
//     console.log(`${quantity} ${product} ordered from stock.`);
//   };

//   const orderStock = function (product, quantity) {
//     cart.push(product, quantity);
//     console.log(`${quantity} ${product} ordered from stock.`);
//   };

//   return {
//     addtoCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addtoCart("apple", 4);
// ShoppingCart2.addtoCart("pizza", 2);
// console.log(ShoppingCart2);
// // shipping cost stays private
// console.log(ShoppingCart2.shippingCost);

///// CommonJS Modules /////////////////////////////////////////////////////////////////
// Doesn't work here, but would work with Node.js ///////
// export.addToCart = function (product, quantity) {
//     cart.push(product, quantity);
//     console.log(`${quantity} ${product} ordered from stock.`);
//   };

////// NPM and Modules //////////////////////////////////////////////////////////////
/////////////////// Lodash has a bunch of useful functions for arrays, objects, numbers, and string /////

import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 2 },
  ],
  user: { loggedIn: true },
};

// const stateClone = Object.assign({}, state);
// state.user.loggedIn = false;
// console.log(stateClone);

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

/// deals with module priority //
// if (module.hot) {
//   module.hot.accept();
// }
