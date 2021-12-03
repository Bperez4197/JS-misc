"use strict";

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }

  get speedUS() {
    return this.speed / 1.6 + " mph";
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const myRide = new Car("Ford f150", 100);

// myRide.accelerate();
// myRide.brake();
// console.log(myRide.speedUS);
// myRide.speedUS = 45;
// console.log(myRide.speedUS);

class EVCl extends Car {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going ${this.speed} km/h with a charge of ${this.#charge}%`
    );
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(
      `${this.make} going ${this.speed} km/h with a charge of ${this.#charge}%`
    );
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
  }
}

const myElectric = new EVCl("Rivian", 120, 23);

console.log(myElectric);
// console.log(myElectric.#charge);
myElectric.accelerate();
myElectric.brake();
myElectric.chargeBattery(90);
console.log(myElectric);
