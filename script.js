const choices = ["rock", "paper", "scissors"];

function randInt () {
    const val1 = Math.floor(Math.random() * 3);
    return val1;
}

function getComputerChoice () {
    let compChoice = randInt();
    return choices[compChoice];
}

function getPlayerChoice () {
    let playerChoice = 
    prompt("What do you choose from? Rock, Paper or Scissors?");
    return playerChoice;
}

function playRound (computerSelection, playerSelection) {
    let compToLower = computerSelection.toLowerCase();
    let playerToLower = playerSelection.toLowerCase();
    if (compToLower === playerToLower) {
        console.log(`Its a draw! Computer throws ${compToLower} and you throw ${playerToLower}`);
    }
    if (compToLower == "rock" && playerToLower == "scissors") {
        console.log("Computer wins! Rock beats Scissors!");
    }
    if (compToLower == "paper" && playerToLower == "rock") {
        console.log("Computer wins! Paper beats rock!");
    }
    if (compToLower == "scissors" && playerToLower == "paper") {
        console.log("Computer wins! Scissors beats paper!");    
    }
    if (playerToLower == "rock" && compToLower == "scissors") {
        console.log("You win! Rock beats scissors!");
    }
    if (playerToLower == "scissors" && compToLower == "paper"){
        console.log(`You win! ${playerToLower} beats ${compToLower}`);
    }
}

playRound(getComputerChoice(), getPlayerChoice());

