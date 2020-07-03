// const http = require('http')

const express = require('express')
const app = express()

app.get('/', function(req, res) {
   res.sendfile(__dirname + '/index.html')
})

app.listen(3000, () => {
  console.log("hi girls")
})
