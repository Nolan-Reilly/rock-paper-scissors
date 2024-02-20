let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection;

let playerScoreText = document.querySelector("#playerScore");
let computerScoreText = document.querySelector("#computerScore");
let outcomeText = document.querySelector("#outcomeText");

// Get all the buttons on the page
const buttons = document.querySelectorAll("button");

// loop through each button and add a click event listener
buttons.forEach(function(button) {
  button.addEventListener("click", function(event) {
    if (event.target.id == "rock") {
      playerSelection = "Rock";
    }

    if (event.target.id == "paper") {
      playerSelection = "Paper";
    }

    if (event.target.id == "scissors") {
      playerSelection = "Scissors";
    }

    getComputerChoice();
    playRound(playerSelection, computerSelection);

    playerScoreText.textContent = "Player Score: " + playerScore;
    computerScoreText.textContent = "Computer Score: " + computerScore;
  });
});

// Gets the computers choice for each round that is played
function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);

  if (num == 0) {
    computerSelection = "Rock";
  } else if (num == 1) {
    computerSelection = "Paper";
  } else {
    computerSelection = "Scissors";
  }
}

// Play a round to determine if the player won or the computer won
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock" && computerSelection == "Scissors") {
    playerScore++;
    outcomeText.textContent = "Rock beats Scissors";
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    playerScore++;
    outcomeText.textContent = "Paper beats Rock";
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    playerScore++;
    outcomeText.textContent = "Scissors beats Paper";
  } else if (playerSelection == computerSelection) {
    outcomeText.textContent = `Tied ${playerSelection} doesn't beat ${computerSelection}`
    return;  // Exit function if the values are the same
  } else {
    computerScore++;
    outcomeText.textContent = `${computerSelection} beats ${playerSelection}`;
  }
}