const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

app.use(express.static(__dirname + '/site'));

io.on('connection', function(socket) {
  console.log('new user say - "hi"');

  socket.on('disconnect', function() {
    console.log('old user say - "good bye"');
  });
});


server.listen(9999);
