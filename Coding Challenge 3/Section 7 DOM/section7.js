// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;

var secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

var score = 20;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //check if there is a guess
  if (!guess) {
    displayMessage("No number!");
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    //keep track of highscore
    var highscore = document.querySelector(".highscore");
    if (Number(highscore.textContent < score)) {
      highscore.textContent = score;
    }
  }
  //when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game..");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//restart game
document.querySelector(".again").addEventListener("click", function () {
  let message = document.querySelector(".message");
  let number = document.querySelector(".number");
  let score2 = document.querySelector(".score");
  let guess = document.querySelector(".guess");

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  message.textContent = "Start guessing...";
  score2.textContent = 20;
  score = 20;
  number.textContent = "?";
  guess.value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  number.style.width = "15rem";
});
