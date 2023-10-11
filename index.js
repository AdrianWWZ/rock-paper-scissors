const getComputerChoice = () => {
  const choice = Math.random();
  if (choice > 0 && choice <= 1 / 3) {
    return "rock";
  } else if (choice > 1 / 3 && choice <= 2 / 3) {
    return "paper";
  } else if (choice > 2 / 3 && choice <= 1) {
    return "scissors";
  }
};

let wins = 0,
  losses = 0,
  ties = 0;
const playRound = (playerSelection, computerChoice) => {
  if (playerSelection === "rock") {
    switch (computerChoice) {
      case "rock":
        console.log("It was a Tie!");
        ties++;
        break;
      case "paper":
        console.log("You Lose, Rock Loses against Paper!");
        losses++;
        break;
      case "scissors":
        console.log("You Win, Rock Wins against Scissors!");
        wins++;
        break;
    }
  }
  if (playerSelection === "paper") {
    switch (computerChoice) {
      case "rock":
        console.log("You Win, Paper Wins against Rock!");
        wins++;
        break;
      case "paper":
        console.log("It was a Tie!");
        ties++;
        break;
      case "scissors":
        console.log("You Lose, Paper Loses against Scissors!");
        losses++;
        break;
    }
  }
  if (playerSelection === "scissors") {
    switch (computerChoice) {
      case "rock":
        console.log("You Lose, Scissors Loses against Rock!");
        losses++;
        break;
      case "paper":
        console.log("You Win, Scissors Wins against Paper!");
        wins++;
        break;
      case "scissors":
        console.log("It was a Tie!");
        ties++;
        break;
    }
  }
};

const game = () => {
  console.log(playRound(getComputerChoice(), getComputerChoice()));
  console.log(playRound(getComputerChoice(), getComputerChoice()));
  console.log(playRound(getComputerChoice(), getComputerChoice()));
  console.log(playRound(getComputerChoice(), getComputerChoice()));
  console.log(playRound(getComputerChoice(), getComputerChoice()));
  console.log(wins, losses, ties);
};

document.querySelector(".button").addEventListener("click", () => {
  game();
});
