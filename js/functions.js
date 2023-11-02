function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function printScore(score, elementID) {
    let div = document.createElement('div');
    div.innerHTML = score;
    document.getElementById(elementID).appendChild(div);
}

function check(checkboxID) {
    document.getElementById(checkboxID).checked = true;
}

function uncheck(checkboxID) {
    document.getElementById(myCheck).checked = false;
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

function clearScore(elementID) {
    document.getElementById(elementID).innerHTML = '';
}

function disableBtns() {
    document.getElementById('play-rock').disabled = true;
    document.getElementById('play-paper').disabled = true;
    document.getElementById('play-scissors').disabled = true;
}

function enableBtns() {
    document.getElementById('play-rock').disabled = false;
    document.getElementById('play-paper').disabled = false;
    document.getElementById('play-scissors').disabled = false;
}