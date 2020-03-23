const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Denys Lins'
  })
})

app.listen(3333)
