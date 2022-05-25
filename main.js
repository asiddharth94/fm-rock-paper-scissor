const rockIcon = document.querySelector(".rock-icon");
const paperIcon = document.querySelector(".paper-icon");
const scissorsIcon = document.querySelector(".scissors-icon");

const playerSelection = document.querySelector(".player-selection");
const compSelection = document.querySelector(".comp-selection");

const displayWinner = document.querySelector(".winner-label");

const options = ["rock", "paper", "scissors"];
let playersChoice, compChoice, winner;

const getComputersChoice = (min, max) => {
  const compSelection = Math.floor(Math.random() * (max - min + 1) + min);
  return options[compSelection];
};

const getWinner = (player, comp) => {
  if (player === "rock") {
    return comp === "scissors"
      ? "Player Won"
      : comp === "paper"
      ? "Computer Won"
      : "Draw! Try Again";
  }
  if (player === "paper") {
    return comp === "rock"
      ? "Player Won"
      : comp === "scissors"
      ? "Computer Won"
      : "Draw! Try Again";
  }
  if (player === "scissors") {
    return comp === "paper"
      ? "Player Won"
      : comp === "rock"
      ? "Computer Won"
      : "Draw! Try Again";
  }
};

rockIcon.addEventListener("click", () => {
  playersChoice = "rock";
  compChoice = getComputersChoice(0, 2);
  winner = getWinner(playersChoice, compChoice);
  playerSelection.textContent = playersChoice;
  compSelection.textContent = compChoice;
  displayWinner.textContent = winner;
});

paperIcon.addEventListener("click", () => {
  playersChoice = "paper";
  compChoice = getComputersChoice(0, 2);
  winner = getWinner(playersChoice, compChoice);
  playerSelection.textContent = playersChoice;
  compSelection.textContent = compChoice;
  displayWinner.textContent = winner;
});

scissorsIcon.addEventListener("click", () => {
  playersChoice = "scissors";
  compChoice = getComputersChoice(0, 2);
  winner = getWinner(playersChoice, compChoice);
  playerSelection.textContent = playersChoice;
  compSelection.textContent = compChoice;
  displayWinner.textContent = winner;
});
