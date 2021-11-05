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
    x: 3.25,
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

const [players1, players2] = game.players;
console.log(players1, players2);

// const [team1GK] = game.players[0];

const [team1GK, ...fieldPlayers] = players1;
console.log(fieldPlayers);
// returns ["Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski"]
console.log(team1GK);
// Neuer

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

game.printGoals("Thiago", "Muller", "Lewandowski", "Coutinho");
game.printGoals(...game.scored);

team1 < team2 && console.log("Team 1 is more likely to win");
team2 < team1 && console.log("Team 2 is more likely to win");
