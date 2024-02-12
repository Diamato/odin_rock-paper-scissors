const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
// functions
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
  return result;
}

function computerInput() {}
