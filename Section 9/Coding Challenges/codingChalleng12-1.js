"use strict";

const Car = function (brand, speed) {
  this.brand = brand;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const beemer = new Car("BMW", 120);
const merc = new Car("Mercedes", 95);

beemer.accelerate();
beemer.brake();
merc.accelerate();
merc.brake();
