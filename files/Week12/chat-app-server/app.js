const express = require('express');
const app = express();
const http = require('http').Server(app); // built in node http server - sent app to http library

// io is socket.io instance
var io = require('socket.io')(http)

// setting up the static resources
app.use(express.static('public'))

// adding the connection listener
io.on('connection', function(socket) {
  console.log('a user has connected')

  socket.on('message', function(message){
    console.log(message)
    io.emit('message', message)
  })
})

http.listen(3000, function(){
  console.log('listening on port 3000');
})
