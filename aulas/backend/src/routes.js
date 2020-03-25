const express = require('express')
const routes = express.Router()
const OngController = require('./controllers/ong-controller')
const IncidentController = require('./controllers/incident-controller')
const ProfileController = require('./controllers/profile-controller')
const SessionController = require('./controllers/session-controller')
const HealthController = require('./controllers/health-controller')

routes.post('/session', SessionController.create)

routes.get('/ongs', OngController.list)
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.list)

routes.get('/incidents', IncidentController.list)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/health', HealthController.health)

module.exports = routes
