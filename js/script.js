let playerScore = 0;
let computerScore = 0;
let whichRivalFlag = 0;
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

        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }

    // function displayResult(argComputerMove, argPlayerMove) {
    //     if (argComputerMove == 'rock' && argPlayerMove == 'paper') {
    //         printMessage('Wygrałeś!');
    //     } else if (argComputerMove == 'paper' && argPlayerMove == 'scissors') {
    //         printMessage('Wygrałeś!');
    //     } else if (argComputerMove == 'scissors' && argPlayerMove == 'rock') {
    //         printMessage('Wygrałeś!');
    //     } else if (argComputerMove == argPlayerMove) {
    //         printMessage('Remis!');
    //     } else if (argPlayerMove == 'nieznany ruch' || argComputerMove == 'nieznany ruch') {
    //         printMessage('Niestety ktoś z nas wykonał nieznany ruch :/');
    //     } else {
    //         printMessage('Przegrałeś :<');
    //     }
    // }
    function countScore(computerNum, playerNum) {
        if (computerNum > playerNum) {
            whichRivalFlag = 0;
            return computerScore++;
        } else if (computerNum < playerNum) {
            whichRivalFlag = 1;
            return playerScore++;
        } else {
            return 0;
        }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch:');

    console.log('Gracz wpisał: ' + playerInput);

    let score = countScore(randomNumber, playerInput);

    if (whichRivalFlag == 0) {
        elementID = 'computerScore';
    } else {
        elementID = 'playerScore';
    }

    if (score != 0){
        printScore(score, elementID);
    }

    let playerMove = getMoveName(playerInput);

    let checkboxID = computerMove + '-' + playerMove;

    check(checkboxID);

    printMessage('Twój ruch:');

    displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function () {
    playGame('1');
});
document.getElementById('play-paper').addEventListener('click', function () {
    playGame('2');
});
document.getElementById('play-scissors').addEventListener('click', function () {
    playGame('3');
});
document.getElementById('resetInput').addEventListener('click', function () {
    clearMessages();
    clearScore(elementID);
});
