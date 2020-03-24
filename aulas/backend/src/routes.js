const express = require('express')
const routes = express.Router()
const OngController = require('./controllers/ong-controller')

routes.get('/ongs', OngController.list)

routes.post('/ongs', OngController.create)

module.exports = routes
