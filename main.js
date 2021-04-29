// let playerMove = "rock";
// let computerMove = "paper";

let choice1 = "rock";
let choice2 = "paper";
let choice3 = "scissors"

// Task 1 

// firstly we want the user to select their move
// if rock vs rock, we want to print out draw
// if paper vs paper, we also want to print out draw
// if paper vs rock, we want to print out and congratulate the winner

let playerChoice = prompt("Select rock, paper or scissors")

let computerMove1 = Math.random();

if (computerMove1 < 0.33) {
    computerMove1 = "rock";
} else if (computerMove1 < 0.66) {
    computerMove1 = "paper";
} else {
    computerMove1 = "scissors";
}

if (playerChoice === choice1 && computerMove1 === choice1 || playerChoice === choice2 && computerMove1 === choice2 || playerChoice === choice3 && computerMove1 === choice3) {
    console.log("draw");
    // } else if (playerChoice === choice2 && computerMove1 === choice2) {
    //     console.log("draw");
    // } else if (playerChoice === choice3 && computerMove1 === choice3) {
    //     console.log("draw");
} else if (playerChoice === choice2 && computerMove1 === choice1 || playerChoice === choice3 && computerMove1 === choice2) {
    console.log("Congrats, you're the winner!");
} else if (computerMove1 === choice2 && playerChoice === choice1 || computerMove1 === choice3 && playerChoice === choice2) {
    console.log("you lost!");
}


// Task 2 - Function 


// function getWinner(player1, player2) {
//     if (player1 === drawResult) {
//         return 0;
//     } else if (player2 === winResult) {
//         return 1;
//     } else {
//         return -1;
//     }
// }

//   

// Task 3 - Getting the User Input and Result Output 



// let result = findWinner("rock", "paper")

// alert(result)

// Task 4 - Generating a Random Computer Move 

// let computerMove1 = Math.random();

// function randomComputerMove() {
//     if (computerMove1 < 0.49) {
//         return computerMove1 = "rock";
//     } else {
//         return computerMove1 = "paper";
//     }
// }

// Task 5 - Creating a Loop that will allow multiple plays 
// let startGameAgain = true;


// while (startGameAgain == true) {
//     let userChoice = prompt("Select Rock, Paper or Scissors");
//     let computerMove1 = Math.random();

//     if (computerMove1 < 0.33) {
//         computerMove1 = "rock";
//     } else if (computerMove1 <= 0.66) {
//         computerMove1 = "paper";
//     } else {
//         computerMove1 = "scissors";
//     }
// }
// console.log(randomComputerMove);

// let playAgain = prompt("Would you like to play again? enter yes or no")

// if (playAgain == "no") {
//     break;
// } 

// }




// while (startGame) {
//     let playerMove = prompt("Select Rock or Paper");
//     let moves = ["rock", "paper"];
//     let computerMove1 = Math.random();
//     console.log(computerMove1);

//     let result = findWinner(playerMove, computerMove);

//     console.log(outcome[result]);

//     let confirm = prompt("Would you like to play again? yes or no")

// }



// while (startGameAgain == true) {
//     let userChoice = prompt("Select Rock, Paper or Scissors");
//     let computerMove1 = Math.random(); function randomComputerMove() {
//         if (computerMove1 < 0.49) {
//             return computerMove1 = "rock";
//         } else {
//             return computerMove1 = "paper";
//         }
//     }
//     console.log(randomComputerMove);

//     let playAgain = prompt("Would you like to play again? enter yes or no")

// if (playAgain == "no") {
//     break;
// } 







// let timeOfDay = sunset

// function timeToEat() {
//     if (timeOfDay = "sunset");
//     return true;
// }

// let ramadanMessage = timeToEat();

// if (ramadanMessage === true) {
//     console.log("Mashallah it's Iftar, time to eat!");
// } else {
//     console.log("hang in there, may Allah grant your duas!");
// }
