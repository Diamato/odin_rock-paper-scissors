// pseudo code
/*1. нужно получить кнопки выбора игрока в переменные
  2. повесить на них слушатель событий, который будет вызывать функцию game(?)
  3. добавить див для отображения результатов. 
  4. заменить все console.log на методы Dom
  5. сделать таблицу счета (игра из пяти раундов)
*/
// let
let userRock = document.querySelector(".rock");
let userPaper = document.querySelector(".paper");
let userScissor = document.querySelector(".scissor");
let userChoice;
// ui variables
const PLAYER_BILL = document.querySelector(".player-bill");
const COMPUTER_BILL = document.querySelector(".computer-bill");
//const
// const BTN = document.querySelector(".btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DRAW = "Draw";
const PLAYER_WON = "You are win!";
const COMPUTER_WON = "Computer has won!";

// addEventListener
userRock.addEventListener("click", function () {
  userChoice = ROCK;
  return userChoice;
});
userPaper.addEventListener("click", function () {
  userChoice = PAPER;
  return userChoice;
});
userScissor.addEventListener("click", function () {
  userChoice = SCISSORS;
  return userChoice;
});
//// functions
// get user choice
// function getUserChoice(value) {
//   if (value === 0) {
//     userChoice = ROCK;
//     return userChoice;
//   } else if (value === 1) {
//     userChoice = PAPER;
//     return userChoice;
//   } else if (value === 2) {
//     userChoice = SCISSORS;
//     return userChoice;
//   }
// }
//
// function getInput() {
//   let result;
//   let userInput = userChoice;
//   if (userInput) {
//     userInput = userInput.toUpperCase();
//     if (userInput === ROCK || userInput === PAPER || userInput === SCISSORS) {
//       result = userInput;
//     } else {
//       alert("We've made a choice for you! It's Rock!");
//       result = ROCK;
//     }
//   } else {
//     alert("We've made a choice for you! It's Scissors!");
//     result = SCISSORS;
//   }
//   console.log("-----------------");
//   console.log(`You've selected ${result}!`);
//   return result;
// }
// get computer choice
function computerInput() {
  let result = null;
  const computerChoice = Math.random();
  if (computerChoice < 0.34) {
    result = ROCK;
  } else if (computerChoice < 0.68) {
    result = SCISSORS;
  } else result = PAPER;
  // console.log("-----------------");
  // console.log(`Computer selected ${result}!`);
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
  const playerChoice = userChoice;
  const compChoice = computerInput();
  console.log(winner(playerChoice, compChoice));
}
game();
