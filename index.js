console.log("Rock, Paper, and Scissors!");
console.log("Let's play!");

window.alert("Be ready to win!");

const data = ["rock", "paper", "scissors"];
console.log(data[0]);
console.log(data[1]);
console.log(data[2]);

function computerChoiceFunctionality(){
    const random = Math.floor(Math.random() * data.length);
    return data[random]
}

const rockButton = document.getElementById("rock-button"); //gets id from html
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");
console.log(rockButton);
console.log(paperButton);
console.log(scissorsButton);
// console.log("hello world");
const playButton = document.getElementById("play-button");
console.log(playButton);
const resultButton = document.getElementById('result-button');
console.log(resultButton);

const roundResultContainter = document.getElementById('round-result-string')
rockButton.addEventListener("click", rockButtonClick); //Listen for  click
paperButton.addEventListener("click", paperButtonClick);
scissorsButton.addEventListener("click", scissorsButtonClick);
playButton.addEventListener("click", playButtonClick);
resultButton.addEventListener("click", resultButton);
console.log(playButton);
console.log(resultButton);


function round-result-string{
    console.log("Click here to see your result!")
    let roundResultstring = resultButton()
}


function rockButtonClick() { // its bigger box | to execute/run something
  console.log("Rock button clicked, yay!");
  let computerChoice =  computerChoiceFunctionality ()
  console.log(computerChoice)
  if (computerChoice === "paper"){
    console.log("computer won this round")
    roundResultContainter.innerHTML = "computer won this round. computerchoice Scissors"
  }
  else if (computerChoice === "scissors"){
    console.log("user won this round")
    roundResultContainter.innerHTML = "user won this round. computerchoice Scissors"
  }
  else{
    console.log("Its a tie")
    roundResultContainter.innerHTML = "It's a tie"
  }
}

function paperButtonClick() {
  console.log("Paper button clicked, well done!");
  let computerChoice =  computerChoiceFunctionality ()
  console.log(computerChoice)
  if (computerChoice === "scissors"){
    console.log("computer won this round")
    roundResultContainter.innerHTML = "computer won this round. computerchoice Scissors"
  }
  else if (computerChoice === "scissors"){
    console.log("user won this round")
    roundResultContainter.innerHTML = "user won this round. computerchoice Scissors"
  }
  else{
    console.log("Its a tie")
    roundResultContainter.innerHTML = "It's a tie"
  }
}

function scissorsButtonClick() {
  console.log("Scissors button clicked, let's go!");
  let computerChoice =  computerChoiceFunctionality ()
  console.log(computerChoice)
  if (computerChoice === "paper"){
    console.log("computer won this round")
    roundResultContainter.innerHTML = "computer won this round. computerchoice Rock"
  }
  else if (computerChoice === "scissors"){
    console.log("user won this round")
    roundResultContainter.innerHTML = "user won this round. computerchoice Rock"
  }
  else{
    console.log("Its a tie")
    roundResultContainter.innerHTML = "It's a tie"
  }
}

function playButtonClick(){
    console.log("Play Button Click");
}

let data0 = "rock";
let data1 = "paper"; 
let data2 = "scissors";

// const = constant, can not chnage 
// let = can change
// var  = can change
