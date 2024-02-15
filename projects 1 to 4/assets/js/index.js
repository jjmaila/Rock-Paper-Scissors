
console.log("Rock, Paper, Scissors!");
console.log("Let's play!");
var play = document.querySelector('.play-button');
var Result = document.querySelector('.result-button');

window.alert("Get ready to win!");
const roundResultContainter = document.querySelector('#resultstring');
const data = ["rock", "paper", "scissors"];
console.log(data[0]);
console.log(data[1]);
console.log(data[2]);

document.addEventListener("DOMContentLoaded", function () {
  const rockButton = document.getElementById("rock-button");
  const paperButton = document.getElementById("paper-button");
  const scissorsButton = document.getElementById("scissors-button");

  rockButton.addEventListener("click", rockButtonClick);
  paperButton.addEventListener("click", paperButtonClick);
  scissorsButton.addEventListener("click", scissorsButtonClick);

  console.log(rockButton);
  console.log(paperButton);
  console.log(scissorsButton);
});

function computerChoiceFunctionality() {
  const random = Math.floor(Math.random() * data.length);
  return data[random];
}

function rockButtonClick() {
  console.log("Rock button clicked, yay!");
  let computerChoice = computerChoiceFunctionality();
  console.log(computerChoice);
  if (computerChoice === "scissors") {
    console.log("computer won this round");
    roundResultContainter.innerHTML = "Computer won this round. Computer choice: Scissors";
  } else if (computerChoice === "rock") {
    console.log("user won this round");
    roundResultContainter.innerHTML = "User won this round. Computer choice: Paper";
  } else {
    console.log("It's a tie");
    roundResultContainter.innerHTML = "It's a tie";
  }
}

function paperButtonClick() {
  console.log("Paper button clicked, well done!");
  let computerChoice = computerChoiceFunctionality();
  console.log(computerChoice);
  if (computerChoice === "scissors") {
    console.log("computer won this round");
    roundResultContainter.innerHTML = "Computer won this round. Computer choice: Scissors";
  } else if (computerChoice === "paper") {
    console.log("user won this round");
    roundResultContainter.innerHTML = "User won this round. Computer choice: Rock";
  } else {
    console.log("It's a tie");
    roundResultContainter.innerHTML = "It's a tie";
  }
}

function scissorsButtonClick() {
  console.log("Scissors button clicked, let's go!");
  let computerChoice = computerChoiceFunctionality();
  console.log(computerChoice);
  if (computerChoice === "paper") {
    console.log("computer won this round");
    roundResultContainter.innerHTML = "Computer won this round. Computer choice: Paper";
  } else if (computerChoice === "scissors") {
    console.log("user won this round");
    roundResultContainter.innerHTML = "User won this round. Computer choice: Rock";
  } else {
    console.log("It's a tie");
    roundResultContainter.innerHTML = "It's a tie";
  }
}
