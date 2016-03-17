function chatNewMsg(data) {
    attach(data.nick, data.msg, false);
}



function send() {
    chatSend(document.getElementById('chat-input').value);
    attach('Yo', document.getElementById('chat-input').value, true);
    document.getElementById('chat-input').value = '';
}


function attach(usr, msg, yo) {
    var block = document.createElement('div');
    var message = document.createElement('span');
    var user = document.createElement('span');
    message.classList.add('message');
    message.innerHTML = msg;
    user.classList.add('user');
    block.classList.add('msg-block');
    user.innerHTML = usr;
    if (yo) {
        block.classList.add('yo');
    } else {

    }
    block.appendChild(user);
    block.appendChild(message);
    document.querySelector('#chat #area').appendChild(block);
    document.querySelector('#chat #area').scrollTop = document.querySelector('#chat #area').scrollHeight;
}


document.getElementById('chat-input').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        send();
    }
});


function random(num) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < num; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

chatLogin(random(5));
document.getElementById('chat-input').value = 'probando uno dos';
send();