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

function generateComputerMove() {
    const computerChoices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return computerChoices[randomNumber];
}

function game(playerMove) {
    const computerMove = generateComputerMove();
    if (playerMove === computerMove) {
        alert(0);
    }
    if (playerMove === "Rock" && computerMove === "Scissors" || playerMove === "Paper" && computerMove === "Rock") {
        if () {
            alert(1);
            playerScore++;
            playerScore_count.innerHTML = playerScore;
            result_count.innerHTML = `${playerMove} beats ${computerMove} - Congrats, you win!`
        } else {
            alert(-1);
            computerScore++;
            computerScore_count.innerHTML = computerScore;
            result_count.innerHTML = `${computerMove} beats ${playerMove} - Oh no, you lost!`
        }
    }
    if (playerMove === "Paper") {
        if (computerMove === "Rock") {
            alert(1);
            playerScore++;
            playerScore_count.innerHTML = playerScore;
            `${playerMove} beats ${computerMove} - Congrats, you win!`
        } else {
            alert(-1);
            computerScore++;
            computerScore_count.innerHTML = computerScore;
            `${computerMove} beats ${playerMove} - Oh no, you lost!`
        }
    }
    if (playerMove === "Scissors") {
        if (computerMove === "Rock") {
            alert(-1);
            computerScore++;
            computerScore_count.innerHTML = computerScore;
            `${computerMove} beats ${playerMove} - Oh no, you lost!`
        } else {
            alert(1);
            playerScore++;
            playerScore_count.innerHTML = playerScore;
            `${playerMove} beats ${computerMove} - Congrats, you win!`
        }
    }

}


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

