// Array of choices for the game
const randompick = ["Rock", "Paper", "Scissors"];

// Function to play a round of the game
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

// Function to get a random choice for the computer
function getComputerChoice(randompick) {
  const randompick_length = randompick.length;
  const value = Math.floor(Math.random() * randompick_length);
  return randompick[value];
}

// Player and computer scores
let playerScore = 0;
let computerScore = 0;

// Function to update the scores on the UI
function updateScores(roundResult) {
  if (roundResult.includes("win")) {
    playerScore++;
  } else if (roundResult.includes("lose")) {
    computerScore++;
  }
  // Update player and computer scores
  document.getElementById("player-score").textContent = "Your score is " + playerScore;
  document.getElementById("computer-score").textContent = "The computer's score is " + computerScore;

  // Check if either player or computer has reached 5 points (game over condition)
  if (playerScore === 5 || computerScore === 5) {
    document.getElementById("game-over").textContent = "Game over!";
  }
}

// Function to handle button click events
function buttonClickHandler(playerChoice) {
  // Get the computer's random choice
  const computerSelection = getComputerChoice(randompick);

  // Play a round of the game and get the result
  const roundResult = playRound(playerChoice, computerSelection);

  // Update the round result and scores on the UI
  document.getElementById("round-result").textContent = roundResult;
  updateScores(roundResult);

  // Check if either player or computer has reached 5 points (game over condition)
  if (playerScore === 5 || computerScore === 5) {
    // Disable the buttons and display restart message
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    document.getElementById("restart-text").textContent = "Reload the page to start the game again";
  }
}

// Get references to the buttons
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');

// Add click event listeners to the buttons
rockBtn.addEventListener('click', () => buttonClickHandler('rock'));
paperBtn.addEventListener('click', () => buttonClickHandler('paper'));
scissorsBtn.addEventListener('click', () => buttonClickHandler('scissors'));
