const express = require('express');
const { Client } = require('pg');

const app = express();
const port = 3000;


const client = new Client({
  user: 'postgres',
  host: 'postgres:0596@localhost:10100',
  database: 'backend_items',
  password: '0596',
  port: 9090, 
});


client.connect();


app.get('/', (req, res) => {
 
  const query = 'SELECT * FROM backend_items';

  client.query(query, (err, result) => {
    if (err) {
      console.error('Erro ao recuperar os arquivos do banco de dados', err);
      res.status(500).send('Erro ao recuperar os arquivos');
    } else {
      
      res.render('index', { arquivos: result.rows });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});