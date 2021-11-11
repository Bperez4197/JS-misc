"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////////////////
//DOM MANIPULATION
const displayMovements = function (movements) {
  containerMovements.innerHtml = "";

  movements.forEach((movement, index) => {
    const type = movement > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
        <div class="movements__value">${movement}</div>
     </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(account1.movements);
displayMovements(account2.movements);
displayMovements(account3.movements);
displayMovements(account4.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ["a", "b", "c", "d", "e"];

// // //SLICE
// // console.log(arr.slice(2));
// // console.log(arr.slice(2, 4));
// // console.log(arr.slice(-1));
// // console.log(arr.slice(1, -2));

// //SPLICE
// //DOES ALTER ORIGINAL ARRAY
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);

// //REVERSE
// //DOES ALTER ORIGINAL ARRAY
// arr = ["a", "b", "c", "d", "e"];
// const arr2 = ["j", "i", "h", "g", "f"];

// console.log(arr2.reverse());
// console.log(arr2);

// //CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //JOIN
// console.log(letters.join("-"));

// //FOR EACH
// //WILL ALWAYS LOOP THROUGH ENTIRE ARRAY. IF YOU NEED TO BREAK OUT OF THE LOOP USE "FOR OF".
// // for (const movement of movements) {
// for (const [index, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1} You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1} you withdrew ${Math.abs(movement)}`);
//   }
// }

// movements.forEach((num, index, array) =>
//   num > 0
//     ? console.log(`Movement ${index + 1} You deposited ${num}`)
//     : console.log(`Movement ${index + 1} you withdrew ${Math.abs(num)}`)
// );

// //FOR EACH FOR MAPS AND SETS
// currencies.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);

// //NO POINT IN KEYS BECAUSE SETS DONT HAVE KEYS OR INDEXES
// currenciesUnique.forEach((value, _, set) => {
//   console.log(`${value}: ${value}`);
// });
