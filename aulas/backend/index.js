const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  return res.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Denys Lins'
  })
})

app.listen(process.env.BACKEND_PORT | 3333, err => {
  console.log(err)
})
