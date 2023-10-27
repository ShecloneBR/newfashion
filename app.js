const express = require('express');
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
  user: 'postgres',
  password: '0596',
  host: 'postgres:0596@localhost:9090',
  database: 'frontend.d',
  port: 5432,
});

app.get('/', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM frontend.d');
    const records = result.rows;
    client.release();
    res.json(records);
  } catch (err) {
    console.error('Erro ao buscar dados:', err);
    res.status(500).send('Erro ao buscar dados do banco de dados.');
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});