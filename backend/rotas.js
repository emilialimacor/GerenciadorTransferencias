const express = require('express')
const rotas = require('express').Router()

rotas.use(express.urlencoded({ extended: false }))
const conexao = require('./config/conexao')

//Rota para listar todas as transferências contidas na database
rotas.get('/', (req, res) => {
  //Query para selecionar todos os dados da tabela tb_transferencias
  let sql = 'select * from tb_transferencias'
  conexao.query(sql, (erro, rows) => {
    if (erro) throw erro
    res.json(rows)
  })
})

//Rota para exibir a transferência de acordo com seu id
rotas.get('/:id', (req, res) => {
  const { id } = req.params
  let sql = `select * from tb_transferencias where id_transferencias = ?`
  conexao.query(sql, [id], (erro, rows, fields) => {
    if (erro) throw erro
    res.json(rows[0])
  })
})

//Deletar uma transferência através do seu id
rotas.delete('/:id', (req, res) => {
  const { id } = req.params
  let sql = `delete from tb_transferencias where id_transferencias = ${id}`
  conexao.query(sql, (erro, rows, fields) => {
    if (erro) throw erro
    res.json({ status: 'Transferência excluída com sucesso' })
  })
})

//Rota para inclusão na tabela de transferências
rotas.post('/', (req, res) => {
  const { nomeCliente, valor, contaCliente } = req.body
  let sql = `insert into tb_transferencias (nomeCliente, valor, contaCliente) values('${nomeCliente}', '${valor}', '${contaCliente}')`
  conexao.query(sql, (erro, rows, fields) => {
    if (erro) throw erro
    res.json({ status: 'Dados cadastrados com êxito.' })
  })
})

rotas.put('/:id', (req, res) => {
  const { id } = req.params
  const { nomeCliente, valor, contaCliente } = req.body
  let sql = `update tb_transferencias set nomeCliente = '${nomeCliente}', valor = '${valor}', contaCliente = '${contaCliente}' where id_transferencias = '${id}'`
  conexao.query(sql, (erro, rows, fields) => {
    if (erro) throw erro
    res.json({ status: 'Transferência editada com êxito' })
  })
})

module.exports = rotas
