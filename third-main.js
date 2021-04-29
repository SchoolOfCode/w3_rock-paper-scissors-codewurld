
function compare(choice1, choice2) {
    if (choice1 == choice2) {
        alert(0);
    }
    if (choice1 == "rock") {
        if (choice2 == "scissors") {
            alert(1);
        } else {
            alert(-1);
        }
    }
    if (choice1 == "paper") {
        if (choice2 == "rock") {
            alert(1);
        } else {
            alert(-1);
        }
    }
    if (choice1 == "scissors") {
        if (choice2 == "rock") {
            alert(-1);
        } else {
            alert(1);
        }
    }
}


let playagain = "Y";

let playerScore = 0;
let computerScore = 0;
let draws = 0;



while (playagain == "Y") {
    let userChoice = prompt("Choose rock, paper, or scissors");
    let computerChoice = Math.random();

    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    document.write(compare(userChoice, computerChoice));
    document.write("<br>");

    if (compare() === 1) {
        playerScore++;
    } else if (result === -1) {
        computerScore++;
    }
    else {
        draws++;
    }


    console.log("This is the computer score" + computerScore);
    console.log("This is the player score" + playerScore);
    document.write(scoreCount);
    playagain = confirm("Do you want to play again?");

}








