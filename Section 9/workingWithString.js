const airline = "Tap Air Portugal";
const plane = "A320";

console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 10));
console.log(airline.slice(0, airline.indexOf(" ")));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  if (seat.slice(-1) == "B" || seat.slice(-1) == "E") {
    return true;
  }
  return false;
};

console.log(checkMiddleSeat("11B"));
console.log(checkMiddleSeat("11E"));
console.log(checkMiddleSeat("11C"));

//string to object
console.log(new String("bryce"));
console.log(typeof new String("bryce"));

//basic string methods
var name = "bRyCe";
var correctName = name[0].toUpperCase() + name.slice(1).toLowerCase();
console.log(correctName);

var announcement = "board at door 23, board at door 23!";

console.log(announcement.replace("door", "gate"));

console.log(announcement.replace(/door/g, "gate"));

//includes, startsWith, endsWith boolean return value

//split and join

//padding padStart and padEnd

//repeat
