const express = require('express')
const router = express.Router()

//MODELS
const model = require('../models/index')

const pessoaController = require('../controllers/pessoaController')

router.get('/', pessoaController.index.bind(null, model.models))
router.get('/create', pessoaController.showForm)

router.post('/create', pessoaController.createPessoa.bind(null, model.models))
router.post('/edit/:id', pessoaController.updatePessoa.bind(null, model.models))
router.get('/edit/:id', pessoaController.updateForm.bind(null, model.models))
router.get('/delete/:id', pessoaController.deletePessoa.bind(null, model.models))



module.exports = router 