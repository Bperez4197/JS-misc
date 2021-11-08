const poll = {
  question: "What is your favorite programming language?",
  options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    var answer = prompt(
      `${this.question}\n ${this.options.join("\n")} \n (Write option number)`
    );
    if (Number(answer) >= 0 && Number(answer) <= 3) {
      this.answers[Number(answer)] += 1;
    } else {
      alert("You chose an invalid answer..");
    }
    this.displayResults();
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(",")}`);
    } else {
      console.log('invalid parameter. Should be "array" or "string".');
    }
  },
};

//must bind or "this" refers to the button instead of the poll object
document
  .querySelector(".btn")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, "string");
