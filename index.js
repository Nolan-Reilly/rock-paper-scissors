// function printScore(pScore, cScore) {
//   console.log(`Player Score: ${pScore}\nComputer Score: ${cScore}`)
// }

// function printOutcome(playerSelection, computerSelection, playerWon) {
//   if (playerWon) {
//     console.log(`You Won! ${playerSelection} beats ${computerSelection}`)
//   } else {
//     console.log(`You Lost! ${computerSelection} beats ${playerSelection}`)
//   }
// }

// function getComputerChoice() {
//   let num = Math.floor(Math.random() * 3);
//   let computerSelection = "";

//   if (num == 0) {
//     computerSelection = "Rock";
//   } else if (num == 1) {
//     computerSelection = "Paper";
//   } else {
//     computerSelection = "Scissors";
//   }

//   return computerSelection;
// }

// function playRound(playerSelection, computerSelection) {
//   let wonRound = false;

//   if (playerSelection == "Rock" && computerSelection == "Scissors") {
//     wonRound = true;
//   } else if (playerSelection == "Paper" && computerSelection == "Rock") {
//     wonRound = true;
//   } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
//     wonRound = true;
//   } else {
//     wonRound = false;
//   }

//   return wonRound;
// }

// function playGame() {
//   let playerScore = 0;
//   let computerScore = 0;

//   for (let i = 0; i < 5; i++) {
//     let playerChoice = prompt("Choose [Rock], [Paper], [Scissors], or [E]xit: ");

//     if (playerChoice == "E") {
//       break;
//     }

//     let computerChoice = getComputerChoice();
    
//     let wonRound = playRound(playerChoice, computerChoice);

//     if (wonRound) {
//       playerScore++;
//       printOutcome(playerChoice, computerChoice, wonRound);
//     } else if (playerChoice == computerChoice) {
//       console.log("You tied with the Computer!")
//     } else if (!wonRound) {
//       computerScore++;
//       printOutcome(playerChoice, computerChoice, wonRound);
//     }

//     printScore(playerScore, computerScore);

//   }
// }

// playGame();
let playerSelection;
let computerChoice;

const buttons = document.querySelectorAll("button");

// loop through each button and add a click event listener
buttons.forEach(function(button) {
  button.addEventListener("click", function(event) {
    if (event.target.id == "rock") {
      playerSelection = "rock";
    }

    if (event.target.id == "paper") {
      playerSelection = "paper";
    }

    if (event.target.id == "scissors") {
      playerSelection = "scissors";
    }

    console.log(playerSelection);
  });
});