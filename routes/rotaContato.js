const express = require("express");
const contato = require('../controllers/contatoControl')

const router = express.Router()



router.get('/', contato.index)

module.exports = router