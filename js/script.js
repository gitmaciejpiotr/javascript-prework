function getMoveName(argMoveId) {
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove) {
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Wygrałeś!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Wygrałeś!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Wygrałeś!');
    } else if (argComputerMove == argPlayerMove) {
        printMessage('Remis!');
    } else if (argPlayerMove == 'nieznany ruch' || argComputerMove == 'nieznany ruch' ) {
        printMessage('Niestety ktoś z nas wykonał nieznany ruch :/');
    } else {
        printMessage('Przegrałeś :<');
    }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);

displayResult(computerMove, playerMove);
