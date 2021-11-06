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
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Bryce Perez");
lufthansa.book(635, "John Smith");
console.log(lufthansa.bookings);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;
//this does not work because the "this" from the original function now points to undefined unstead of eurowings
//book(23, "Sara Williams");

//CALL
//call tells book what "this" should point to and then the arguments of the original function
book.call(eurowings, 23, "Sara Williams");
console.log(eurowings);

book.call(lufthansa, 123, "Joe Montana");
console.log(lufthansa);

//APPLY
//apply works like call but instead of passing in the individual arguments for the original function
//you pass in an array of arguments.
//not used much in modern javascript, use call and destructure arguments.

const flightData = [583, "George Cooper"];
book.apply(eurowings, flightData);

book.call(lufthansa, ...flightData);

//The bind method
