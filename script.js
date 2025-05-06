function getHumanChoice(){
    let string = prompt("Enter your choice: ");
    return string = string.toLowerCase();
}

function getComputerChoice(){
    let max = 3;
let min = 1;
let int = Math.floor(Math.random()*(max-min+1)+min);
if(int===1){
    return "rock";
} else if(int===2){
    return "paper";
} else{
    return "scissors";
}
}

function playGame(){
    let humanSelection= "";
    let computerSelection= "";
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 1; i <= 5; i++){
        humanSelection = getHumanChoice();
        console.log(`humanSelection = ${humanSelection}`);
        computerSelection = getComputerChoice(); 
        console.log(`computerSelection= ${computerSelection}`);
        if ((humanSelection == "rock" && computerSelection == "scissors") || (humanSelection == "paper" && computerSelection == "rock") || (humanSelection == "scissors" && computerSelection == "paper")){
            console.log("You win!");
            humanScore++;
        } else if((computerSelection == "rock" && humanSelection == "scissors") || (computerSelection == "paper" && humanSelection == "rock") || (computerSelection == "scissors" && humanSelection == "paper")){
            console.log("You lose!");
            computerScore++;
        } else{
            console.log("No one scored.");
        }
    }

    console.log(`You won ${humanScore} rounds and computer won ${computerScore} rounds.`)
    if(humanScore > computerScore){
        console.log("You win the game!");
    } else if (computerScore > humanScore){
        console.log("You lost the game :(.");
    } else {
        console.log("You tied!");
    }
}

playGame();

