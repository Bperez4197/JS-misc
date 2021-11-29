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

const calcPrintBalance = (acc) => {
  acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = (acc) => {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((total, mov) => total + mov, 0);

  labelSumIn.textContent = `${incomes}$`;

  const expenses = acc.movements
    .filter((mov) => mov < 0)
    .reduce((total, mov) => total + mov, 0);

  labelSumOut.textContent = `${Math.abs(expenses)}$`;

  const interest = movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * acc.interestRate) / 100)
    .filter((mov) => mov >= 1)
    .reduce((total, mov) => total + mov, 0);

  labelSumInterest.textContent = `${interest}$`;
};

const createUsernames = (accs) => {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcPrintBalance(acc);
  calcDisplaySummary(acc);
};

createUsernames(accounts);
// console.log(accounts);

// EVENT HANDLERS
///////////////////////////////////
let currentAccount;

btnLogin.addEventListener("click", (event) => {
  //prevent form from submitting
  event.preventDefault();

  currentAccount = accounts.find(
    (account) => account.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display ui and a welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance >= amount &&
    recieverAcc?.username !== currentAccount.username
  ) {
    //doing the transfer
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);

    //update the user interface
    updateUI(currentAccount);
  }
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value == currentAccount.username &&
    Number(inputClosePin.value) == currentAccount.pin
  ) {
    //find the index of the current account in the accounts array so we can reference it in the splice method
    const index = accounts.findIndex(
      (acc) => acc.username == currentAccount.username
    );

    //delete account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

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

// //MAP
// //////////////////////////////////////
const euroToUsd = 1.1;

// const movementsUsd = movements.map((mov) => Math.floor(mov * euroToUsd));

// console.log(movementsUsd);

// const movementsDescriptions = movements.map((mov, index) => {
//   return `Movement ${index + 1} You ${
//     mov > 0 ? "deposited" : "withdrew"
//   } ${Math.abs(mov)}`;
// });

// console.log(movementsDescriptions);

// //FILTER
// ////////////////////////////////

// const deposits = movements.filter((mov) => {
//   return mov > 0;
// });
// console.log(deposits);

// const withrawals = movements.filter((move) => move < 0);
// console.log(withrawals);

// //REDUCE
// ///////////////////////////////////////
// // .reduce(accumulator, current, index, arr){}, inital value of accumulator
// const balance = movements.reduce((total, mov) => {
//   return total + mov;
// }, 0);

// console.log(balance);

// //MAXIMUM VALUE
// const maxValue = movements.reduce(
//   (max, mov) => (max > mov ? max : mov),
//   movements[0]
// );

// console.log(maxValue);

//METHOD CHAINING MAGIC
///////////////////////////////////////////////
// const totalDepositsUsd = movements
//   .filter((mov) => mov > 0)
//   //by using the third parameter, the arr, we are able to access the array that was passed to the map method which is useful for debugging because we can see the result of each chained method if we need to.
//   // .map((mov, index, arr) => {
//   //   console.log(arr);
//   //   return mov * euroToUsd;
//   // })
//   .map((mov) => mov * euroToUsd)
//   .reduce((total, mov) => total + mov, 0);

// console.log(Math.round(totalDepositsUsd));

// FIND
//BOOLEAN LIKE A FILTER METHOD. RETURNS THE FIRST ELEMENT IN THE ARRAY THAT PASSES OUR CONDITIONAL STATEMENT
//ONLY RETURNS ELEMENTS, NOT AN ARRAY
//////////////////////////////
// const firstWidthdrawal = movements.find((mov) => mov < 0);
// console.log(firstWidthdrawal);

// console.log(accounts);

// const account = accounts.find((acc) => acc.owner == "Jessica Davis");
// console.log(account);
