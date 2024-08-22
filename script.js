
function getComputerChoice() {
    const x = Math.floor(Math.random()* 3);
    if ( x === 0 ) {
        console.log("rock");
    } else if (x === 1) {
        console.log("paper")
    } else if (x === 2) {
        console.log("scissors");   
    }
       
}

function getHumanChoice() {
    const y = prompt("What's your sign?");
    if ( y === "rock" ) {
        console.log("rock");
    } else if (y === "paper") {
        console.log("paper")
    } else if (y === "scissors") {
        console.log("scissors");   
    }
}