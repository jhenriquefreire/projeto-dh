const express = require('express');
const path = require('path')
const app = express();

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')))
app.get('/contatos', (req, res) => res.send({nome: 'João', idade: 29}))
app.get('/produtos/:id?', (req, res) => {
    let {id} = req.params
    if (id == undefined){
        res.send('Página inicial dos produtos')
    }
    else{
        res.send('Este é o produto ' + id)
    }
})

app.listen(3000, ()=> console.log('Servidor 3000 rodando'))