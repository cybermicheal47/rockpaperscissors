const randompick = ["Rock", "Paper", "Scissors"];

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie! You both picked ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "Scissors") {
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    return "You win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "Paper") {
    return "You win! Scissors beats Paper";
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function getComputerChoice(randompick) {
  const randompick_length = randompick.length;
  const value = Math.floor(Math.random() * randompick_length);
  return randompick[value];
}

let playerScore = 0;
let computerScore = 0;

function updateScores(roundResult) {
  if (roundResult.includes("win")) {
    playerScore++;
  } else if (roundResult.includes("lose")) {
    computerScore++;
  }
  document.getElementById("player-score").textContent = "Your score is " + playerScore;
  document.getElementById("computer-score").textContent = "The computer's score is " + computerScore;

  if (playerScore === 5 || computerScore === 5) {
    document.getElementById("game-over").textContent = "Game over!";
  }
}

function buttonClickHandler(playerChoice) {
  const computerSelection = getComputerChoice(randompick);
  const roundResult = playRound(playerChoice, computerSelection);
  document.getElementById("round-result").textContent = roundResult;
  updateScores(roundResult);



  if (playerScore === 5 || computerScore === 5) {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    document.getElementById("restart-text").textContent = "Reload the page to start the game again";
  }
}

const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');

rockBtn.addEventListener('click', () => buttonClickHandler('rock'));
paperBtn.addEventListener('click', () => buttonClickHandler('paper'));
scissorsBtn.addEventListener('click', () => buttonClickHandler('scissors'));
