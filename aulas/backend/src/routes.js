const express = require('express')

const routes = express.Router()

routes.get('/users', (req, res) => {
  const query = req.query
  const params = req.params
  const body = req.body

  const response = {
    evento: 'Semana OmniStack 11.0',
    aluno: 'Denys Lins',
    method: 'get',
    query: query,
    params: params,
    body: body
  }

  console.log(response)

  return res.json(response)
})

routes.get('/users/:id', (req, res) => {
  const query = req.query
  const params = req.params
  const body = req.body

  const response = {
    evento: 'Semana OmniStack 11.0',
    aluno: 'Denys Lins',
    method: 'get BY ID',
    query: query,
    params: params,
    body: body
  }

  console.log(response)

  return res.json(response)
})

routes.post('/users', (req, res) => {
  const query = req.query
  const params = req.params
  const body = req.body

  const response = {
    evento: 'Semana OmniStack 11.0',
    aluno: 'Denys Lins',
    method: 'post',
    query: query,
    params: params,
    body: body
  }

  console.log(response)

  return res.json(response)
})

module.exports = routes
