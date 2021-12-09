// Exporting Module
console.log("exporting module");

// // Blocking code
// console.log("Start Fetching users...");
// await fetch("https://jsonplaceholder.typicode.com/users");
// console.log("Finished Fetching users...");

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to cart.`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { cart, totalPrice, totalQuantity as qt };

export default function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to cart.`);
}
