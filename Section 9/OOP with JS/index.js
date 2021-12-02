"use strict";

const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   //Never do this. don't create a method inside a constructor function. Makes every object carry around this function which is bad for performance. This leads to the magic of prototypes
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const bryce = new Person("Bryce", 1994);
// console.log(bryce);
//1. new {} is created
//2. function is called, this = {}
//3. {} linked to a prototype
//4. function automatically returns {}

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
// console.log(jack);
//matilda.calcAge();

// console.log(bryce instanceof Person);

/// PROTOTYPES //////////////////////////////////////////////////////////////////////////////////////////////////
//This is how to add methods and one way to add properties
// console.log(Person.prototype);

// because of prototypal inheritance every object will have access to this method without storing it on the actual object. There is only one copy of the function instead of one for every object.
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

bryce.calcAge();
// console.log(bryce.__proto__);
// console.log(Person.prototype.isPrototypeOf(bryce));

//The prototype has the property, not the object, so under proto the property will be listed on the object but if you run hasOwnProperty for a prototypcal property it will return false.
Person.prototype.species = "Homo Sapiens";
console.log(bryce.species, matilda.species);
console.log(bryce.hasOwnProperty("species"));
