const express = require('express')
const routes = express.Router()
const OngController = require('./controllers/ong-controller')
const IncidentController = require('./controllers/incident-controller')

routes.get('/ongs', OngController.list)

routes.post('/ongs', OngController.create)

routes.get('/incidents', IncidentController.list)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes
