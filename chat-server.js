var io = require('socket.io')(8080);


io.on('connect', function(socket){
    socket.on('chat:login', function(data){
        console.log(data);
        socket.nick = data.nick;
    })
    
    socket.on('chat:msg', function(data){
        console.log(data);
        data.nick = socket.nick;
        socket.broadcast.emit('chat:msg', data);
    })
});