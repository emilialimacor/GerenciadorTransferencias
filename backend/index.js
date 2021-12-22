require('./config/conexao')
const express = require('express')
const app = express()
const porta = process.env.prot || 3000

app.get('/', (req, res) => {
  res.send('Teste ok')
})

//Para utilizar arquivo no formato json
app.use(express.json())

app.use('/transferencias', require('./rotas'))

app.listen(porta, () => {
  //
  console.log('servidor está rodando')
})
