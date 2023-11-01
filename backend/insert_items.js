const express = require('express');
const { Client } = require('pg');

const app = express();
const port = 9090;


const client = new Client({

  user: process.env['user'],
  host: process.env['host'],
  database: process.env['database'],
  password: process.env['senha'],
  port: process.env['port'],

});


client.connect();


app.post('/insert_database', (req, res) => {
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



/*
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const sequelize = new Sequelize('seu_banco_de_dados', 'seu_usuario', 'sua_senha', {
  host: 'localhost',
  dialect: 'postgres',
});

const Record = sequelize.define('Record', {
  // Defina os campos da tabela aqui
  campo1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  campo2: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

app.get('/', async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log('Conexão estabelecida com sucesso.');

    await Record.sync(); // Sincroniza o modelo com a tabela no banco de dados

    const records = await Record.findAll(); // Retorna todos os registros da tabela

    res.render('index', { records });
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    res.status(500).send('Erro ao conectar ao banco de dados.');
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
*/
