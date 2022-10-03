const choices = ["rock", "paper", "scissors"]

const playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
const computerSelection = getComputerChoice();


function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "It's a tie!"
        } else if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock"
        } else {
            return "You Win! Rock beats Scissors!"
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            return "It's a tie!"
        } else if (computerSelection === "scissors") {
            return "You Lose! Scissors beats Paper"
        } else {
            return "You Win! Paper beats Rock!"
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "scissors") {
            return "It's a tie!"
        } else if (computerSelection === "rock") {
            return "You Lose! Rock beats Scissors"
        } else {
            return "You Win! Scissors beats Paper!"
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log(playRound(playerSelection, computerSelection));
        console.log("You have a score of !");
    }
}




game();