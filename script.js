//const
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DRAW = "Draw";
const PLAYER_WON = "You are win!";
const COMPUTER_WON = "Computer has won!";
// functions
// get user choice
function getInput() {
  let result;
  let userInput = prompt(
    "Please, make your choice: Rock, Paper or Scissor",
    ""
  );
  if (userInput) {
    userInput = userInput.toUpperCase();
    if (userInput === ROCK || userInput === PAPER || userInput === SCISSORS) {
      result = userInput;
    } else {
      alert("We've made a choice for you! It's Rock!");
      result = ROCK;
    }
  } else {
    alert("We've made a choice for you! It's Scissors!");
    result = SCISSORS;
  }
  console.log("-----------------");
  console.log(`You've selected ${result}!`);
  return result;
}
// get computer choice
function computerInput() {
  let result = null;
  const computerChoice = Math.random();
  if (computerChoice < 0.34) {
    result = ROCK;
  } else if (computerChoice < 0.68) {
    result = SCISSORS;
  } else result = PAPER;
  console.log("-----------------");
  console.log(`Computer selected ${result}!`);
  return result;
}

function winner(playerChoice, compChoice) {
  if (playerChoice == compChoice) {
    return DRAW;
  } else if (
    (compChoice === ROCK && playerChoice === PAPER) ||
    (compChoice === PAPER && playerChoice === SCISSORS) ||
    (compChoice === SCISSORS && playerChoice === ROCK)
  ) {
    return PLAYER_WON;
  } else {
    return COMPUTER_WON;
  }
}

// function game
function game() {
  const playerChoice = getInput();
  const compChoice = computerInput();
  console.log(winner(playerChoice, compChoice));
}
// game();
