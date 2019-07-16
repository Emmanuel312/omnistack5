const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const server = require('http').Server(app)  // extrai o servidor http do app
const io = require('socket.io')(server) // habilita que o server entenda o protocolo ws websocket (real time)

mongoose.connect('mongodb://omnistack:<put_senha_here>@ds121415.mlab.com:21415/omnistack-emmanuel',{useNewUrlParser: true})


app.use((req,res,next) =>
{
    req.io = io // cria uma nova var em req
    return next()
})
app.use(cors()) // permite que o backend aceite requisicoes externas
app.use(express.json()) // utiliza json para todas as requisicoes
app.use(require('./routes'))

server.listen(3000, () =>
{
    console.log('Server started on port 3000')
})  

