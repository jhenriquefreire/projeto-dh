const express = require('express');
const path = require('path')
const produtos = require('./routes/rotaProduto')

const app = express();

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')))
app.get('/contatos', (req, res) => res.send({nome: 'João', idade: 29}))

app.use('/produtos', produtos)

app.listen(3000, ()=> console.log('Servidor 3000 rodando'))