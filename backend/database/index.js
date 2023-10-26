const express = require('express');
const { Client } = require('pg');

const app = express();
const port = 3000;


const client = new Client({
    user: 'postgres',
    host: 'postgres:9782@localhost:9090',
    database: 'backend_items',
    password: '9782',
    port:  9090,
  });

client.connect();


app.post('/adicionar-item', (req, res) => {
  const { nome, quantidade } = req.body;


  const query = 'INSERT INTO tabela_items (nome, quantidade) VALUES ($1, $2)';
  const values = [nome, quantidade];

  client.query(query, values, (err, result) => {
    if (err) {
      console.error('Erro ao inserir item no banco de dados', err);
      res.status(500).send('Erro ao inserir item');
    } else {
      console.log('Item inserido com sucesso');
      res.status(200).send('Item inserido com sucesso');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});