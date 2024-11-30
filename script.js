let humanScore = 0
let computerScore = 0
let roundsPlayed = 0

function getComputerChoice(){
   const choices = ["rock", "paper", "scissors"];
   return choices[Math.floor(Math.random()*3)]
}

function getHumanChoice(choice){
   playRound(choice)
}
 
function playRound(humanChoice){
   if (roundsPlayed === 5) {
      return
   }
   const computerChoice = getComputerChoice() 
   let resultMessage = `You chose: ${humanChoice}.\nComputer chose: ${computerChoice}. `;
if (humanChoice === computerChoice){
   resultMessage += "ITS A TIE";
} else if(
   (humanChoice === "paper" && computerChoice === "scissors") ||
   (humanChoice === "scissors"  && computerChoice === "rock") ||
   (humanChoice === "rock"  && computerChoice === "paper")
) {
   computerScore++
   resultMessage += `You LOST! ${computerChoice} beats ${humanChoice}.`;
} else {
   humanScore++
   resultMessage += `You WON! ${humanChoice} beats ${computerChoice}.`;
}

roundResultDiv.textContent = resultMessage
humanScoreSpan.textContent = humanScore
computerScoreSpan.textContent = computerScore

roundsPlayed++

roundAttemptDiv.textContent = `round ${roundsPlayed} of 5`

if (roundsPlayed === 5){
   if (humanScore>computerScore){
      winnerDiv.textContent = "Congratulations! You are the overall winner!";
   } else {
      winnerDiv.textContent = "Sorry, the computer won the game.";
}
}  
}





const roundResultDiv = document.getElementById("round-result")
const humanScoreSpan = document.getElementById("human-score")
const computerScoreSpan = document.getElementById("computer-score")
const winnerDiv = document.getElementById("winner")
const roundAttemptDiv = document.getElementById("round-attempts")



document.getElementById("rock").addEventListener("click", () => getHumanChoice("rock") );
document.getElementById("paper").addEventListener("click", () => getHumanChoice("paper"))
document.getElementById("scissors").addEventListener("click", () => getHumanChoice("scissors"));