// get computer choice
function computerPlay() {
  const options = ["rock", "scissors", "paper"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}
// get user input
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "You are win";
  } else {
    return "Computer has won";
  }
}
// функция обновления интерфейса
function updateGame(playerSelection, computerSelection, result) {
  const gameDiv = document.querySelector("#game");
  const resultDiv = document.querySelector("#result");
  gameDiv.style.display = "none";
  resultDiv.innerHTML = `You're choice: ${playerSelection}, 
  computer has choice: ${computerSelection}. ${result}`;
  const playAgainButton = document.createElement("button");
  playAgainButton.textContent = "Play Again";
  playAgainButton.addEventListener("click", () => {
    gameDiv.style.display = "block";
    resultDiv.innerHTML = "";
  });
  resultDiv.appendChild(playAgainButton);
}
// привязываем функции к кнопкам
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    updateGame(playerSelection, computerSelection, result);
  });
});
