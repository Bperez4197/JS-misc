//MAPS///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//one of the main differences between maps and objects is that object keys are strings
//but maps can have any data type as a key including numbers,arrays,other maps

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are close :(");
console.log(rest);

console.log(rest.get("name"));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close"))); //because these will both log true its like saying rest.get(true) which returns "we are open :D".

console.log(rest.has("categories"));
rest.delete(2); //index
//console.log(rest.clear());
console.log(rest);
console.log(rest.size);

// rest.set(arr, "Test");
// console.log(rest.get[1,2]); //will return undefined because the array in the set is pointing at that specific array in memory. so a copy of it will not return what we're looking for. Need to make the array a variable.
let tempArr = [1, 2];
rest.set(tempArr, "Test");
console.log(rest.get(tempArr));
//can set page elements as keys in Maps
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);

const question = new Map([
  ["question", "What is the best programming language?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again!"],
]);

console.log(question);

const openingHours = {
  key: "value",
  key2: "value2",
};

//convert object to a map
console.log(Object.entries(openingHours)); //makes object an array of arrays [["key","value"], ["key2","value2"]]
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key == "number") console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt("Your answer"));

// console.log(question.get(answer === question.get("correct")));

// //convert map to array
// console.log([...question]);
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

//SETS////////////////////////////////////////////////////

// const ordersSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Risotto",
//   "Pizza",
//   "Pasta",
//   "Risotto",
// ]);
// console.log(ordersSet);
// //returns {"Pasta", "Pizza", "Risotto"}
// console.log(new Set("Bryce"));
// //returns {"B", "r", "y", "c", "e"}
// console.log(ordersSet.size);
// console.log(ordersSet.has("Pizza"));
// //returns true
// console.log(ordersSet.has("Bread"));
// //returns false
// ordersSet.add("Garlic Bread");
// ordersSet.add("Garlic Bread");
// ordersSet.delete("Risotto");
// //ordersSet.clear(); - removes all
// console.log(ordersSet);
// for (const order of ordersSet) console.log(order);

// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// //destructuring works on any iterables including a set. This creates an array of unique values from the staff array.
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

//SETS ARE NOT MEANT TO BE ABLE TO RETRIEVE DATA. JUST CHECK IF A SET .HAS AN ELEMENT.
//IF YOU WANT TO RETRIEVE THE DATA USE AN ARRAY//////////////////////////////////////////
