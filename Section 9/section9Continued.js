//es6 enhanced object literals also allows property names to be computed
//example: sat could be weekdays[5] or `day-${2+4}`

openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //before es6
  //openingHours: openingHours

  //with es6 enhance object literals
  openingHours,

  //es6 enhance object literals also applies to methods. rather then doing a function expression you
  //can just write the function and its name with be the function name
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}.`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// for (let item of menu) {
//   console.log(item);
// }

// to get indexes with for of loop
// //old way
// for (let item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// //destructure right in the loop declaration
// for (let [index, item] of menu.entries()) {
//   console.log(`${index + 1}: ${item}`);
// }

//optional chainin ?.

//looping objects: object keyes, values and entries

// //Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (let day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// //Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

const entries = Object.entries(openingHours);
// console.log(entries);

//for(let [key,value] of entries) <<<<<<<<---------would normally work but value is an object so we can destructure it here by using the same names as value's keys
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}
