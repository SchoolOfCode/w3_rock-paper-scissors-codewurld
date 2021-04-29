let playerScore = 0;
let computerScore = 0;
let draws = 0;

//Computer choice
function computerPlay() {
    let random = Math.random();
    if (random <= 0.3333) {
        return "paper";
    } else if (random >= 0.6666) {
        return "rock";
    } else {
        return "scissors";
    }
}

//Plays one round of RPS
function playRound(playerChoice, computerSelection) {
    if (playerChoice === computerSelection) {
        return draw;
    } else if (playerChoice === "rock" && computerSelection === "scissors") {
        return playerWinRound;

    } else if (playerChoice === "paper" && computerSelection === "rock") {
        return playerWinRound;

    } else if (playerChoice === "scissors" && computerSelection === "paper") {
        return playerWinRound;

    } else {
        return computerWinRound;

    }
}

//Specifies round win/game win messages
let playerWinRound = "Player wins this round!"
let computerWinRound = "Computer wins this round!"
let draw = "Draw!"
let playerWin = "Player wins the game! Congratulations!"
let computerWin = "Computer wins the game! Congratulations!"


//For loop that plays multiple rounds
for (let i = 0; i < 1000; i++) {
    let playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    const computerSelection = computerPlay();
    let roundResult = playRound(playerChoice, computerSelection);
    console.log(roundResult);
    gameScore(roundResult);
    console.log("Your score is " + playerScore);
    console.log("The computer's score is " + computerScore);

    if (playerScore === 5 || computerScore === 5) {
        break;
    }
}


//Keeps score and prints out correct messages based on score
function gameScore() {
    let result = playRound()

    if (result === playerWinRound) {
        playerScore++;
    } else if (result === draw) {
        draws++;
    } else {
        computerScore++;
    }


    if (playerScore === 5) {
        console.log(playerWin);
        return;
    }
    if (computerScore === 5) {
        console.log(computerWin);
        return;
    }
}