/*
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const result = document.querySelector('.result');
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'Tie';
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')
    ) {
        return 'Player';
    } else {
        return 'Computer';
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == 'Tie') {
        return "It's a Tie!";
    } else if (result == 'Player') {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

*/
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resultDiv = document.querySelector('.result');
const playerScoreElement = document.querySelector('#player-score');
const computerScoreElement = document.querySelector('#computer-score');
const resetButton = document.querySelector('.reset');

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'Tie';
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')
    ) {
        return 'Player';
    } else {
        return 'Computer';
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.textContent = '0';
    computerScoreElement.textContent = '0';
    resultDiv.textContent = '';
    resetButton.style.cssText = 'display: none';
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == 'Tie') {
        resultDiv.textContent = "It's a Tie!";
    } else if (result == 'Player') {
        playerScore++;
        resultDiv.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScoreElement.textContent = `${playerScore}`;
    } else {
        computerScore++;
        resultDiv.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScoreElement.textContent = `${computerScore}`;
    }

    if (playerScore == 5 || computerScore == 5) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        if (playerScore == 5) {
            resultDiv.textContent = 'Player wins the game!';
            resetButton.style.cssText = 'display: unset';
        } else {
            resultDiv.textContent = 'Computer wins the game!';
            resetButton.style.cssText = 'display: unset';
        }
    }
}

rockButton.addEventListener('click', (e) =>
    playRound('rock', getComputerChoice())
);

paperButton.addEventListener('click', (e) =>
    playRound('paper', getComputerChoice())
);

scissorsButton.addEventListener('click', (e) =>
    playRound('scissors', getComputerChoice())
);

resetButton.addEventListener('click', () => resetGame());
