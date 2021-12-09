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
// import * as ShoppingCart from "./shoppingCart.js";

// console.log("importing module");
// ShoppingCart.addToCart("bread", 3);
// console.log(ShoppingCart.totalPrice);

// Importing default /////
import add, { cart } from "./shoppingCart.js";
// add("pizza", 2);
// console.log(cart);

//////////// Top-level Await //////////////////////////////////////////////////////////////////////////////

// // Only possible to use await outside of an async function in modules //////////////////////////////////
// console.log("Start Fetching");
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);
// console.log("something");

// Async functions always return a promise //////////////////////////
const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();

// // Not very clean
// lastPost.then((last) => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
