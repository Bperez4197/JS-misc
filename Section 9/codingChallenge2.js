const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4.0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nove 9th 2037",
  odds: {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5,
  },
  //put in any number of players names, ...players makes them an array
  printGoals: function (...players) {
    let goalsScored = 0;
    for (let i = 0; i < players.length; i++) {
      console.log(players[i]);
      goalsScored++;
    }
    console.log(goalsScored);
  },
};

// for (let [index, goalScorer] of game.scored.entries()) {
//   console.log(`Goal ${index + 1}: ${goalScorer}`);
// }

// let odds = Object.values(game.odds);
// let sum = 0;
// for (let odd of odds) {
//   sum += odd;
// }

// const average = sum / odds.length;
// console.log(average);

let oddEntries = Object.entries(game.odds);

for (const [key, value] of oddEntries) {
  key == "draw"
    ? console.log(`Odds of ${key}: ${value}`)
    : console.log(`Odds of victory ${game[key]}: ${value}`);
}

const scorers = {};

for (const player of game.scored) {
  scorers[player] ? (scorers[player] += 1) : (scorers[player] = 1);
}
console.log(scorers);
