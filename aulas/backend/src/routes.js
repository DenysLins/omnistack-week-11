const express = require('express')
const crypto = require('crypto')
const connection = require('./database/index')

const routes = express.Router()

routes.post('/ongs', async (req, res) => {
  const { name, email, whatsapp, city, uf } = req.body
  const id = crypto.randomBytes(4).toString('HEX')
  const ong = {
    id: id,
    name: name,
    email: email,
    whatsapp: whatsapp,
    city: city,
    uf: uf
  }

  console.log(ong)

  await connection('ongs').insert(ong)

  return res.json({ id })
})

routes.get('/ongs', async (req, res) => {
  const data = await connection.select().table('ongs')

  return res.json(data)
})

module.exports = routes
