let playerPlay = () => {
  let playerChoice = prompt("What will you play? Rock, paper, or scissors:");
  playerChoice.toLowerCase();

  return playerChoice;
};

let getRandomInt = (num) => {
  return Math.floor(Math.random() * num);
};

let computerPlay = () => {
  let compChoice = getRandomInt(3);
  if (compChoice === 0) {
    return "rock";
  } else if (compChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  } 
};

let playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === "rock" && computerSelection === "scissors") {
    return true;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return true;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return true;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return false;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return false;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return false;
  } else {
    return "It's a tie!";
  }
};

let game = () => {
  // Initialize variables to play the game and track the score
  let player, computer, round;
  let playerCount = 0,
    compCount = 0;

  // Using a for loop to play a game of 5 rounds
  for (i = 0; i < 5; i++) {
    player = playerPlay();
    computer = computerPlay();
    round = playRound(player, computer);

    if (round === true) {
      playerCount++;
      console.log("You won that round, %s beats %s.", player, computer);
    } else if (round === false) {
      compCount++;
      console.log("You lost that round, %s beats %s.", computer, player);
    } else {
      console.log("It was a tie...");
    }
  }

  // Check the score to determine who won the game or if it was a tie
  if (playerCount > compCount) {
    console.log(
      "You won the game! The final score was: %d to %d",
      playerCount,
      compCount
    );
  } else if (playerCount < compCount) {
    console.log(
      "You lost the game. The final score was: %d to %d",
      playerCount,
      compCount
    );
  } else {
    console.log(
      "The game was tied. The final score was: %d to %d",
      playerCount,
      compCount
    );
  }
};

const playerSelection = "rock";
const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));
game();
