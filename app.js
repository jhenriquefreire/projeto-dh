const exp = require('constants');
const express = require('express');
const path = require('path')
const produtos = require('./routes/rotaProduto')
const contato = require('./routes/rotaContato')

const app = express();

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => res.render('home'))
app.get('/contatos', (req, res) => res.send({nome: 'João', idade: 29}))

app.use('/produtos', produtos)
app.use('/contato', contato)

app.listen(3000, ()=> console.log('Servidor 3000 rodando'))