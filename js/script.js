let playerScore = 0;
let computerScore = 0;
let whichRivalFlag = null;
let elementID = '';

function playGame(playerInput) {

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'rock';
        } else if (argMoveId == 2) {
            return 'paper';
        } else if (argMoveId == 3) {
            return 'scissors';
        }
    }

    function countScore(ComputerMove, PlayerMove) {
        if (ComputerMove == PlayerMove) {
            return 0;
        } else if (ComputerMove == 'rock' && PlayerMove == 'paper') {
            whichRivalFlag = 1;
            playerScore = playerScore + 1;
            return playerScore;
        } else if (ComputerMove == 'paper' && PlayerMove == 'scissors') {
            whichRivalFlag = 1;
            playerScore = playerScore + 1;
            return playerScore;
        } else if (ComputerMove == 'scissors' && PlayerMove == 'rock') {
            whichRivalFlag = 1;
            playerScore = playerScore + 1;
            return playerScore;
        } else {
            whichRivalFlag = 0;
            computerScore = computerScore + 1;
            return computerScore;
        }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    let playerMove = getMoveName(playerInput);
    let score = countScore(computerMove, playerMove);

    console.log('Wynik: ' + score);
    console.log('Flaga: ' + whichRivalFlag);

    if (whichRivalFlag == 0) {
        elementID = 'computerScore';
    } else {
        elementID = 'playerScore';
    }

    if (score !== 0) {
        clearScore(elementID);
        printScore(score, elementID);
    }

    let checkboxID = computerMove + '-' + playerMove;

    check(checkboxID);

    printMessage('Mój ruch:');
    printMessage('Twój ruch:');
}

printScore(0, 'computerScore');
printScore(0, 'playerScore');

document.getElementById('play-rock').addEventListener('click', function () {
    playGame('1');
    disableBtns();
});
document.getElementById('play-paper').addEventListener('click', function () {
    playGame('2');
    disableBtns();
});
document.getElementById('play-scissors').addEventListener('click', function () {
    playGame('3');
    disableBtns();
});
document.getElementById('resetInput').addEventListener('click', function () {
    clearMessages();
    enableBtns();
});
