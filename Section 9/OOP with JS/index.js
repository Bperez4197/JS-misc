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

// bryce.calcAge();
// console.log(bryce.__proto__.__proto__);
// console.log(Person.prototype.isPrototypeOf(bryce));

//The prototype has the property, not the object, so under proto the property will be listed on the object but if you run hasOwnProperty for a prototypcal property it will return false.
Person.prototype.species = "Homo Sapiens";
// console.log(bryce.species, matilda.species);
// console.log(bryce.hasOwnProperty("species"));
// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 4, 7, 2, 9, 4, 6, 3, 7];
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector("h1");
// console.dir(h1);

////////////////////////// ES6 CLASSES /////////////////////////////////////////////////// //

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //METHODS WRITTEN OUTSIDE THE CONSTRUCTOR ARE AUTOMATICALLY WRITTEN TO THE .PROTOTYPE////////////

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exits////////////////////////
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl("Jessica Davis", 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.__proto__ === PersonCl.prototype);
// console.log(jessica.age);

//This is the same as declaring the method outside the constructor
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.fullName}!`);
};

jessica.greet();

//1. Classes are NOT hoisted which means we cant use them before they're declared
//2. classes are first-class citizens which means we can pass them to functions and return them from functions
//3. Classes are executed in strict mode

////////////////////////////////////GETTERS AND SETTERS/////////////////////////////////////////////////////////
const walter = new PersonCl("Walter White", 1965);

const account = {
  owner: "bryce",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;

console.log(account.movements);
