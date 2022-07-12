
function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  switch (true) {
    case (playerSelection.toUpperCase() === 'ROCK'):
      if (computerSelection === 'paper') {
        alert('You Lose! Paper beats Rock');
        return('You Lose! Paper beats Rock');
      }
      else if (computerSelection === 'scissors') {
        alert('You Win! Rock beats Scissors');
        return('You Win! Rock beats Scissors');
      }
      else {
        alert('Its a tie');
        return('Its a tie');
      }
    case (playerSelection.toUpperCase() === 'PAPER'):
      if (computerSelection === 'scissors') {
        alert('You Lose! Scissors beats Paper');
        return('You Lose! Scissors beats Paper');
      }
      else if (computerSelection === 'Rock') {
        alert('You Win! Paper beats Rock');
        return('You Win! Paper beats Rock');
      }
      else {
        alert('Its a tie');
        return('Its a tie');
      }
    case (playerSelection.toUpperCase() === 'SCISSORS'):
      if (computerSelection === 'rock') {
        alert('You Lose! Rock beats Scissors');
        return('You Lose! Rock beats Scissors');
      }
      else if (computerSelection === 'paper') {
        alert('You Win! Scissors beats Paper');
        return('You Win! Scissors beats Paper');
      }
      else {
        alert('Its a tie');
        return('Its a tie');
      }
    default: 
      alert('You did not pick an option'); 
      return('You did not pick an option');
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Please Select Rock, Paper, or Scissors: ');
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
  alert('Thanks for playing!!!');
  return('Thanks for playing!!!');
}

game();