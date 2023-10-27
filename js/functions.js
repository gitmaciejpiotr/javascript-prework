function printMessage(msg){
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function check(checkboxID) {
    document.getElementById(checkboxID).checked = true;
}

function uncheck(checkboxID) {
    document.getElementById(myCheck).checked = false;
}

function clearMessages(){
    document.getElementById('messages').innerHTML = '';
}