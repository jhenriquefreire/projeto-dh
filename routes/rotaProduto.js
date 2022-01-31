const express = require("express");
const produto = require('../controllers/produtoControl')

const router = express.Router()


router.get('/criar', produto.criar)
router.get('/excluir/:id?', produto.excluir)
router.get('/:id?', produto.index)

module.exports = router