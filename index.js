//Подключаю модули, создаю сервер
const createCards = require('./public/js/createCards.js'); // Мой модуль, который создает новые карточки
const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

app.set('view engine', 'ejs');
app.use('/public', express.static('./public'));


app.get('/', function(req, res) {
  res.render('index');
})

app.get('/room:id', function(req, res) {
  myNumber = req.params.id;
  res.render('room', {roomID: myNumber, catastrophe: createCards[0], yourParams: createCards[myNumber]});
})

//"Слушаю" сервер
server.listen(9999);
















//========================================================



//Проверяю подключение сокетов
// io.on('connection', function(socket) {
//   console.log('new user say - "hi"');
//   users++;
//
//   socket.on('disconnect', function() {
//     console.log('old user say - "good bye"');
//   });
// });
