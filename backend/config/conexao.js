// variável para instanciar o pacote do mysql
const mysql = require('mysql')
const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'farfar1988',
  port: 3306,
  database: 'db_transferencias'
})

conexao.connect(erro => {
  if (erro) throw erro
  console.log('estamos conectados com a base de dados')
})

module.exports = conexao
