const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

let users = [];

app.use(express.static(__dirname + '/site'));

io.on('connection', function(socket) {

  socket.on('disconnect', function() {
  });
  // console.log('new user say - "hi"');
  // console.log('old user say - "good bye"');
});

// io.on('connection', function(socketRoom) {
//   console.log('new user from room say - "hi"');
//
//   socketRoom.on('disconnect', function() {
//     console.log('old user from room say - "good bye"');
//   });
// });

server.listen(9999);
