const path = require('path')
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io').listen(server)


app.get('/', function(request, response) {
  response.sendfile(path.join(__dirname + '/site/index.html'))
})


server.listen(9999)
