// Storing our values for future use including relevant HTML elements  
let playerScore = 0;
let computerScore = 0;
let playerScore_count = document.getElementById("player-score");
let computerScore_count = document.getElementById("computer-score");
let scoreBoard_count = document.querySelector(".score-board");
let result_count = document.querySelector(".result > p");
let rock_count = document.getElementById("R");
let paper_count = document.getElementById("P");
let scissors_count = document.getElementById("S");

// Enabling computer to randomly select game move 
function generateComputerMove() {
    const computerChoices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return computerChoices[randomNumber];
}

// Find out the outcome of each round and tally score by:
// Compare the different probabilities or outcome of player move to computer move
// When player move beats computer move, add one to player score
// When computer move beats player move, add one to computer score
// When draw, do nothing
// Display the outcome of each round

function game(playerMove) {
    const computerMove = generateComputerMove();

    if (playerMove === "Rock" && computerMove === "Scissors" || playerMove === "Paper" && computerMove === "Rock" || playerMove === "Scissors" && computerMove === "Paper") {
        // alert(1);
        playerScore++;
        playerScore_count.innerHTML = playerScore;
        result_count.innerHTML = `${playerMove} beats ${computerMove} - Congrats, you win!`
    } else if (playerMove === "Scissors" && computerMove === "Rock" || playerMove === "Rock" && computerMove === "Paper" || playerMove === "Paper" && computerMove === "Scissors") {
        // alert(- 1);
        computerScore++;
        computerScore_count.innerHTML = computerScore;
        result_count.innerHTML = `${computerMove} beats ${playerMove} - Oh no, you lost!`
    } else {
        // alert(0);
        result_count.innerHTML = `${playerMove} equals ${computerMove} - Draw!`


    }
}

// Allow player move to register when player clicks on their choice
// Choice of player move is used to make comparison above to find game round outcome

function choiceId() {
    rock_count.addEventListener('click', function () {
        game("Rock");
    })

    paper_count.addEventListener('click', function () {
        game("Paper");
    })

    scissors_count.addEventListener('click', function () {
        game("Scissors");
    })
}

choiceId();

