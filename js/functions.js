const printMessage = function(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

const printScore = function(score, elementID) {
    let div = document.createElement('div');
    div.innerHTML = score;
    document.getElementById(elementID).appendChild(div);
}

const check = function(checkboxID) {
    document.getElementById(checkboxID).checked = true;
}

const clearMessages = function() {
    document.getElementById('messages').innerHTML = '';
}

const clearScore = function(elementID) {
    document.getElementById(elementID).innerHTML = '';
}

const disableBtns = function() {
    document.getElementById('play-rock').disabled = true;
    document.getElementById('play-paper').disabled = true;
    document.getElementById('play-scissors').disabled = true;
}

const enableBtns = function() {
    document.getElementById('play-rock').disabled = false;
    document.getElementById('play-paper').disabled = false;
    document.getElementById('play-scissors').disabled = false;
}