//Get user input from buttons
let buttons = document.getElementsByClassName('choice');
let compScore = 0;
let userScore = 0;
let scoreBoard = document.getElementById('results');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.textContent, getComputerChoice());
        if(compScore == 5) {
            scoreBoard.textContent = 'Computer wins!';
        } else if(userScore == 5) {
            scoreBoard.textContent = 'You win!';
        }
    });
});

//Get user input from prompt
function getUserInput() {
    let userInput = prompt("Choose Rock, Paper, or Scissors: ", "");
    let playerSelection = userInput.substring(0,1).toUpperCase() + userInput.slice(1).toLowerCase();

    if (playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Scissors') {
        console.log('Player Selection: ' +  playerSelection);
        return playerSelection;
    } else {
        playerSelection = getUserInput();
        return playerSelection;
    }

}

let result = document.getElementById('round-winner');
let playerScore = document.getElementById('user-score');
let computerScore = document.getElementById('computer-score');

//Generate computer choice
function getComputerChoice () {
    let randomNumber = Math.random();
    let computerSelection = '';

    if(randomNumber < 0.34) {
        computerSelection = 'Rock';
        console.log("Computer Selection: " + computerSelection);
        return computerSelection;
    } else if(randomNumber < 0.67) {
        computerSelection = 'Paper';
        console.log("Computer Selection: " + computerSelection);
        return computerSelection;
    } else if(randomNumber < 1) {
        computerSelection = 'Scissors';
        console.log("Computer Selection: " + computerSelection);
        return computerSelection;
    } else {
        console.log("Error");
        return 'Error';
    }
}

//Compare choices
function playRound (a, b) {
    if(a === b) {
        result.textContent = "It's a draw.";
        return 'draw';
    } else if ((a === 'Rock' && b === 'Paper') ||
    (a === 'Paper' && b === 'Scissors') ||
    (a === 'Scissors' && b === "Rock")) {
        result.textContent = `You Lose! ${b} beats ${a}`;
        compScore++;
        computerScore.textContent = `Computer score: ${compScore}`;
        return 'lose';
    } else {
        result.textContent = `You Win! ${a} beats ${b}`;
        userScore++;
        playerScore.textContent = `Your score: ${userScore}`;
        return 'win';
    }
}

//Play 5 rounds
function game() {
    let computerScore = 0;
    let playerScore = 0;
    let finalResult = "";
    for(let i = 0; i < 5; i++) {
        playerSelection = getUserInput();
        let output = playRound(playerSelection, getComputerChoice());
        console.log(result);

        if(output === 'win') {
            playerScore++;
        } else if(output === 'lose') {
            computerScore++;
        }
        console.log(`Player: ${playerScore}`);
        console.log(`Computer: ${computerScore}`);
    }

    //Get final result
    if(playerScore > computerScore) {
        finalResult = 'Congratulations, you win';
        console.log(finalResult);
        return finalResult;
    } else if(computerScore > playerScore) {
        finalResult = 'Better luck next time';
        console.log(finalResult);
        return finalResult;
    } else {
        finalResult = 'It is a draw';
        console.log(finalResult);
        return finalResult;
    }
}

//game();