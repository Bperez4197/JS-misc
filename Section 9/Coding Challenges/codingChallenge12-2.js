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

myRide.accelerate();
myRide.brake();
console.log(myRide.speedUS);
myRide.speedUS = 45;
console.log(myRide.speedUS);
