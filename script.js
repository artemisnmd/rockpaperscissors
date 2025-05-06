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


