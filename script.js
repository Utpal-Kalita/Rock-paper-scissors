
/*function getComputerChoice(){
    let x = Math.floor(Math.random()* 3);
    if ( x === 0 ) {
        console.log("rock");
    } else if (x === 1) {
        console.log("paper")
    } else if (x === 2) {
        console.log("scissors");   
    }
}
    console.log(getComputerChoice());

    function getHumanChoice(){
        let y = prompt("Enter a sign")
        y = y.toLowerCase();
        if ( y === "rock" ) {
            console.log("rock");
        } else if (y === "paper") {
            console.log("paper")
        } else if (y === "scissors") {
            console.log("scissors");   
        }
    }
    console.log(getHumanChoice());

    var humanScore = 0
    var computerScore = 0


function playRound(humanChoice, computerChoice){;

if ( humanChoice === computerChoice){
    console.log("Its a TIEE")
} else if (
    (humanChoice === "rock" && computerChoice === "paper") || 
    (humanChoice === "scissor" && computerChoice === "rock") || 
    (humanChoice === "paper" && computerChoice === "scissor") 
) {console.log(`You lost! ${computerChoice} beats ${humanChoice}`)
computerScore++
} else { console.log (`You WON! ${humanChoice} beats ${computerChoice}`)
    humanScore++}  
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame(){
    playRound(humanSelection, computerSelection); 

}*/  
function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x === 0) {
        return "rock";
    } else if (x === 1) {
        return "paper";
    } else if (x === 2) {
        return "scissors";   
    }
}

function getHumanChoice() {
    let y = prompt("Enter a sign (rock, paper, or scissors):");
    y = y.toLowerCase();
    if (y === "rock" || y === "paper" || y === "scissors") {
        return y;
    } else {
        console.log("Invalid choice. Please enter rock, paper, or scissors.");
        return getHumanChoice(); // Ask again if the input is invalid
    }
}

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    
    if (humanChoice === computerChoice) {
        console.log("It's a TIE!");
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") || 
        (humanChoice === "scissors" && computerChoice === "rock") || 
        (humanChoice === "paper" && computerChoice === "scissors") 
    ) {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else {
        console.log(`You WON! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);



for (let i = 1; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

if (humanScore > computerScore) {
    console.log("Congratulations! You are the overall winner!");
} else if (computerScore > humanScore) {
    console.log("Sorry, the computer won overall.");
} else {
    console.log("It's an overall tie!");
}


