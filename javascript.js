playerScore = 0;
compScore = 0;

function playRound(playerSelection, computerSelection) {

    playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    const choices = ["rock", "paper", "scissors"]
    computerSelection = choices[Math.floor(Math.random() * choices.length)];


    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "It's a tie! \n Your score: " + playerScore + ". CPU score: " + compScore + ".";
        } else if (computerSelection === "paper") {
            compScore++;
            return "Round Lost! Paper beats Rock! \n Your score: " + playerScore + ". CPU score: " + compScore + ".";
        } else {
            playerScore++;
            return "Round Won! Rock beats Scissors! \n Your score: " + playerScore + ". CPU score: " + compScore + ".";
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            return "It's a tie! \n Your score: " + playerScore + ". CPU score: " + compScore + ".";
        } else if (computerSelection === "scissors") {
            compScore++;
            return "Round Lost! Scissors beats Paper! \n Your score: " + playerScore + ". CPU score: " + compScore + ".";
        } else {
            playerScore++;
            return "Round Won! Paper beats Rock! \n Your score: " + playerScore + ". CPU score: " + compScore + ".";
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "scissors") {
            return "It's a tie! \n Your score: " + playerScore + ". CPU score: " + compScore + ".";
        } else if (computerSelection === "rock") {
            compScore++;
            return "Round Lost! Rock beats Scissors! \n Your score: " + playerScore + ". CPU score: " + compScore + ".";
        } else {
            playerScore++;
            return "Round Won! Scissors beats Paper! \n Your score: " + playerScore + ". CPU score: " + compScore + ".";
        }
    }

}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
        
    }
    if (playerScore > compScore) {
        console.log("Congratulations! You win the game!")
    } else {
        console.log("I'm sorry. You lost the game.")
    }
}

game();