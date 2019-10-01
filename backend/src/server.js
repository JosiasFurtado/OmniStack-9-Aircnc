const express = require('express')
const mongoose = require('mongoose')
const app = express()
const routes = require('./routes')


mongoose.connect('mongodb+srv://omnistack9:omnistack9@cluster0-msjcp.mongodb.net/omnistack9?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.json())
app.use(routes)

app.listen(3333)

//req.query = Acessar query params (filter)
//req.params = Acessar route params (put && delete)
//req.body = Acessar corpo da requisição(criação e edição)