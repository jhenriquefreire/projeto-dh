const express = require("express");

const router = express.Router()


router.get('/criar', (req, res) => res.send('Criação de produtos'))
router.get('/excluir', (req, res) => res.send('Exclusão de produtos'))
router.get('/:id?', (req, res) => {
    let {id} = req.params
        if (id == undefined){
            res.send('Página inicial dos produtos')
        }
        else{
            res.send('Este é o produto ' + id)
        }
    })

module.exports = router