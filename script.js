const getComputerChoice = () => {
  const choice = ["rock", "paper", "scissors"];
  const computerChoice = choice[Math.floor(Math.random() * choice.length)];
  return computerChoice;
};
getComputerChoice();

const userChoise = prompt("Please choose between rock, paper or scissors");
const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "It's a tie";
  } else {
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return "You are the winner";
    } else {
      return "You Lose! Computer wins";
    }
  }
};

const game = () => {
  const playerSelection = userChoise;
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));
};
game();
