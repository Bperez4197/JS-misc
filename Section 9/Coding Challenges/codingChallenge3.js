const gameEvents = new Map([
  [17, "Goal"],
  [36, "Substition"],
  [47, "Goal"],
  [61, "Substition"],
  [64, "Yellow Card"],
  [69, "Red Card"],
  [70, "Substition"],
  [72, "Substition"],
  [76, "Goal"],
  [80, "Goal"],
  [92, "Yellow Card"],
]);

const uniqueEvents = new Set(gameEvents.values());
console.log(uniqueEvents);

gameEvents.delete(64);
console.log(gameEvents);

function timeBetween(map) {
  let keyArray = [...map.keys()];
  let finalArr = [];
  for (let i = 0; i < keyArray.length; i++) {
    let difference = 0;
    if (i < keyArray.length - 1) {
      difference = keyArray[i + 1] - keyArray[i];
      finalArr.push(difference);
    }
  }
  let sum = finalArr.reduce((total, val) => (total += val));
  return sum / finalArr.length;
}

console.log(
  `An event happened, on average, every ${Math.floor(
    timeBetween(gameEvents)
  )} minutes`
);

for (let [time, event] of gameEvents) {
  time >= 45
    ? console.log(`${event} happened in the second half at ${time} minutes`)
    : console.log(`${event} happened in the first half at ${time} minutes`);
}
