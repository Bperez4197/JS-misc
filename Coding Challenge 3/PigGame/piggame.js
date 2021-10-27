const rollButton = document.querySelector(".btn--roll");
var diceImage = document.querySelector(".dice");
var playerOne = document.querySelector(".player--0");
var playerTwo = document.querySelector(".player--1");
var playerOneCurrent = document.querySelector("#current--0");
var playerTwoCurrent = document.querySelector("#current--1");
var playerOneScore = document.querySelector("#score--0");
var playerTwoScore = document.querySelector("#score--1");
var holdButton = document.querySelector(".btn--hold");
var newGameButton = document.querySelector(".btn--new");
var playing = true;

var activePlayerCurrent = function () {
  if (playerOne.classList.contains("player--active")) {
    return playerOneCurrent;
  } else {
    return playerTwoCurrent;
  }
};

var activePlayerScore = function () {
  if (playerOne.classList.contains("player--active")) {
    return playerOneScore;
  } else {
    return playerTwoScore;
  }
};

diceImage.classList.remove("hidden");

////////////////BUTTONS/////////////////////////////////
//roll the dice and make the image match the number
rollButton.addEventListener("click", function () {
  if (playing) {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    //make all player One active player
    let currentNumber = Number(activePlayerCurrent().textContent);

    switch (diceNumber) {
      case 1:
        diceImage.src = "dice-1.png";
        activePlayerCurrent().textContent = 0;
        switchPlayers();
        break;
      case 2:
        diceImage.src = "dice-2.png";
        activePlayerCurrent().textContent = currentNumber + 2;
        break;
      case 3:
        diceImage.src = "dice-3.png";
        activePlayerCurrent().textContent = currentNumber + 3;
        break;
      case 4:
        diceImage.src = "dice-4.png";
        activePlayerCurrent().textContent = currentNumber + 4;
        break;
      case 5:
        diceImage.src = "dice-5.png";
        activePlayerCurrent().textContent = currentNumber + 5;
        break;
      case 6:
        diceImage.src = "dice-6.png";
        activePlayerCurrent().textContent = currentNumber + 6;
        break;
      default:
        diceImage.src =
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.KSrSuXmUZwrFai8e2R3lXQHaE8%26pid%3DApi&f=1";
        break;
    }
  }
});

holdButton.addEventListener("click", function () {
  if (playing) {
    //add the "current" to the score and then set it back to 0
    let score =
      Number(activePlayerScore().textContent) +
      Number(activePlayerCurrent().textContent);
    activePlayerScore().textContent = score;
    activePlayerCurrent().textContent = 0;

    ///winning logic
    if (score >= 50) {
      playing = false;
      diceImage.classList.add("hidden");
      var winner;
      Number(playerOneScore.textContent) > Number(playerTwoScore.textContent)
        ? (winner = "Player 1")
        : (winner = "Player 2");

      console.log(`${winner} wins with a score of ${score}!`);
      winner === "Player 1"
        ? playerOne.classList.add("player--winner")
        : playerTwo.classList.add("player--winner");
    } else {
      switchPlayers();
    }
  }
});

function newGame() {
  playerOneScore.textContent = 0;
  playerTwoScore.textContent = 0;
  playing = true;
  playerOne.classList.remove("player--winner");
  playerTwo.classList.remove("player--winner");
  diceImage.classList.remove("hidden");
}

newGameButton.addEventListener("click", newGame);

function switchPlayers() {
  if (playerOne.classList.contains("player--active")) {
    playerOne.classList.remove("player--active");
    playerTwo.classList.add("player--active");
  } else {
    playerTwo.classList.remove("player--active");
    playerOne.classList.add("player--active");
  }
}
