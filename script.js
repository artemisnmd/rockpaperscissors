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
		return "human";
	} else if (
		(computerSelection == "Rock" && humanSelection == "Scissors") ||
		(computerSelection == "Paper" && humanSelection == "Rock") ||
		(computerSelection == "Scissors" && humanSelection == "Paper")
	) {
		return "computer";
	} else {
		return "tie";
	}
}

function score() {}

let msgDiv = document.createElement("div");
msgDiv.textContent = "Choose Rock, Paper or Scissors";
document.body.appendChild(msgDiv);

let scoreDiv = document.createElement("div");
scoreDiv.textContent = `Human Score: 0 Computer Score: 0`;
document.body.appendChild(scoreDiv);

let rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
document.body.appendChild(rockBtn);

let paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
document.body.appendChild(paperBtn);

let scissorBtn = document.createElement("button");
scissorBtn.textContent = "Scissors";
document.body.appendChild(scissorBtn);

let winCheck = "";
let humanScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", function () {
	winCheck = playGame("Rock");
	if (winCheck == "computer") {
		computerScore++;
		msgDiv.textContent = `You lose!`;
		scoreDiv.textContent = `Human Score: ${humanScore}  Computer Score :${computerScore}`;
	} else if (winCheck == "human") {
		humanScore++;
		msgDiv.textContent = `You win!`;
		scoreDiv.textContent = `Human Score: ${humanScore}  Computer Score :${computerScore}`;
	} else {
		msgDiv.textContent = `You tied!`;
		scoreDiv.textContent = `Human Score: ${humanScore}  Computer Score :${computerScore}`;
	}
	if (humanScore == 5) {
		msgDiv.textContent = "You have won the game!";
		scoreDiv.textContent = "Resetting scores to 0";
		humanScore = 0;
		computerScore = 0;
	} else if (computerScore == 5) {
		msgDiv.textContent = "You have lost the game:(";
		scoreDiv.textContent = "Resetting scores to 0";
		humanScore = 0;
		computerScore = 0;
	}
});

paperBtn.addEventListener("click", function () {
	winCheck = playGame("Paper");
	if (winCheck == "computer") {
		computerScore++;
		msgDiv.textContent = `You lose!`;
		scoreDiv.textContent = `Human Score: ${humanScore}  Computer Score :${computerScore}`;
	} else if (winCheck == "human") {
		humanScore++;
		msgDiv.textContent = `You win!`;
		scoreDiv.textContent = `Human Score: ${humanScore}  Computer Score :${computerScore}`;
	} else {
		msgDiv.textContent = `You tied!`;
		scoreDiv.textContent = `Human Score: ${humanScore}  Computer Score :${computerScore}`;
	}
	if (humanScore == 5) {
		msgDiv.textContent = "You have won the game!";
		scoreDiv.textContent = "Resetting scores to 0";
		humanScore = 0;
		computerScore = 0;
	} else if (computerScore == 5) {
		msgDiv.textContent = "You have lost the game:(";
		scoreDiv.textContent = "Resetting scores to 0";
		humanScore = 0;
		computerScore = 0;
	}
});

scissorBtn.addEventListener("click", function () {
	winCheck = playGame("Scissors");
	if (winCheck == "computer") {
		computerScore++;
		msgDiv.textContent = `You lose!`;
		scoreDiv.textContent = `Human Score: ${humanScore}  Computer Score :${computerScore}`;
	} else if (winCheck == "human") {
		humanScore++;
		msgDiv.textContent = `You win!`;
		scoreDiv.textContent = `Human Score: ${humanScore}  Computer Score :${computerScore}`;
	} else {
		msgDiv.textContent = `You tied!`;
		scoreDiv.textContent = `Human Score: ${humanScore}  Computer Score :${computerScore}`;
	}
	if (humanScore == 5) {
		msgDiv.textContent = "You have won the game!";
		scoreDiv.textContent = "Resetting scores to 0";
		humanScore = 0;
		computerScore = 0;
	} else if (computerScore == 5) {
		msgDiv.textContent = "You have lost the game:(";
		scoreDiv.textContent = "Resetting scores to 0";
		humanScore = 0;
		computerScore = 0;
	}
});
