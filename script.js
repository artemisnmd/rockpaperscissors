// function getHumanChoice(){
//     let string = prompt("Enter your choice of rock, paper, or scissors: ");
//     return string = string.toLowerCase();
// }

let rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
document.body.appendChild(rockBtn);

let paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
document.body.appendChild(paperBtn);

let scissorBtn = document.createElement("button");
scissorBtn.textContent = "Scissors";
document.body.appendChild(scissorBtn);

rockBtn.addEventListener("click", function(){playGame("Rock");});
paperBtn.addEventListener("click",function(){playGame("Paper");});
scissorBtn.addEventListener("click",function(){playGame("Scissors");})

function getComputerChoice() {
    let max = 3;
    let min = 1;
    let int = Math.floor(Math.random() * (max - min + 1) + min);
    if (int === 1) {
        return "Rock";
    } else if (int === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playGame(btnValue) {
    let humanSelection = btnValue;
    let computerSelection = "";

    computerSelection = getComputerChoice();
    if (
        (humanSelection == "Rock" && computerSelection == "Scissors") ||
        (humanSelection == "Paper" && computerSelection == "Rock") ||
        (humanSelection == "Scissors" && computerSelection == "Paper")
    ) {
        console.log(`You win! ${humanSelection} beats ${computerSelection}.`);
        return true;

    } else if (
        (computerSelection == "Rock" && humanSelection == "Scissors") ||
        (computerSelection == "Paper" && humanSelection == "Rock") ||
        (computerSelection == "Scissors" && humanSelection == "Paper")
    ) {
        console.log(`You lose! ${humanSelection} loses to ${computerSelection}.`);
        return false;

    } else {
        console.log(
            `No one scored. ${humanSelection} ties with ${computerSelection}. `
        );
    }
}
