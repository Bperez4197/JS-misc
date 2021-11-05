"use strict";

//default parameters

function createBooking(flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
}

createBooking("L34A", 3, 400);
createBooking("L34A");

//first class and higher order functions// first class is the concept higher-order is the concept in practice
//functions are treated as values so they can be stored in variables and passed as arguments
//can return functions and use function methods

//callbacks //

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("Javascript is the best!", upperFirstWord);
transformer("Javascript is the best!", oneWord);

//calls the function right away instead of when its called by the transformer function where str is undefined
//transformer("Javascript is the best!", upperFirstWord());

//functions returning functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

const greet = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Bryce");
greeterHey("Steven");

greet("Hello")("Bryce");

//Call and Apply Methods

//The bind method
