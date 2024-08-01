const express = require('express')
const router = express.Router()
const indexController = require('../controllers/indexController')

router.get('/', indexController.index)

router.get('/new', indexController.getNew)

router.post('/new', indexController.postNew)

module.exports = router
