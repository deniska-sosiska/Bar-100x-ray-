//Подключаю модули, создаю сервер
const createCards = require('./site/js/createCards.js'); // Мой модуль, который создает новые карточки
const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
// var
let users = [];
app.use(express.static(__dirname + '/site'));

//Проверяю подключение сокетов
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

//"Слушаю" сервер
server.listen(9999);
