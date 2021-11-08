"use strict";
// A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone; Its a concept not a tangible javascript object.

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

//closure is what allows this booker method to remember the secureBooking variables even though its been popped off the call stack
const booker = secureBooking();
//A function has access to the variable environment of the execution context in which it was created
//In other words, booker attaches the variables of secureBooking because it is where the booker function originated

booker();
booker();
booker();

console.dir(booker);

// CODING CHALLENGE USING CLOSURES
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
