//Подключаю модули, создаю сервер
const createCards = require('./public/js/createCards.js'); // Мой модуль, который создает новые карточки
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

app.set('view engine', 'ejs');
app.use('/public', express.static('./public'));

let updateDataCards = createCards()

app.get('/', function(req, res) {
  res.render('index', {
    countUsers: Number(updateDataCards.users)
  });
})

// app.post('/update', (req, res) => {
//   updateDataCards = createCards()
//   res.render('backpage')
//   res.end()
// }) 
// ↑↑↑ crush server ↑↑↑

app.get('/room:id', (req, res) => {
  myNumber = req.params.id;
  res.render('room', {
    roomID: Number(myNumber),
    catastrophe: updateDataCards.cards[0],
    attribute: updateDataCards.cards[myNumber]
  });
})

//"Слушаю" сервер
server.listen(9999, () => {
  console.log("localhost:9999")
});


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
