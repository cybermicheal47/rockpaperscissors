const randompick = ["Rock", "Paper", "Scissors"];

function playRound(playerSelection, computerSelection, randompick) {
  // /player and computer if else if else statement 
  if (playerSelection === computerSelection) {
    return `It's a tie! you both picked ${playerSelection}`;
 } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats Scissors";
 } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats Rock";
 } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats Paper";
 } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
 }
}

//random pick for the computer
function getComputerChoice(randompick) {
  const randompick_length = randompick.length;
  const value = Math.floor(Math.random() * randompick_length);
  return randompick[value];
}

//For loop that plays multiple rounds  
let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 1000; i++) {
  let playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
  const computerSelection = getComputerChoice(randompick);
  let roundResult = playRound(playerChoice, computerSelection, randompick);
  console.log(roundResult);
  // gameScore(roundResult);
  if (roundResult.includes("win")) {
    playerScore++;
  } else if (roundResult.includes("lose")) {
    computerScore++;
  }
  console.log("Your score is " + playerScore);
  console.log("The computer's score is " + computerScore);

  if (playerScore === 5 || computerScore === 5) {
    break;
  }
}

console.log("Game over!");
