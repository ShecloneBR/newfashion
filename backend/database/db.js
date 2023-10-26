const { Client } = require('pg');


const client = new Client({
  user: 'postgres',
  host: 'postgres:9782@localhost:9090',
  database: 'backend_items',
  password: '9782',
  port:  9090,
});


client.connect()
  .then(() => {
    console.log('Conexão estabelecida com o PostgreSQL');
    
  })
  .catch((err) => {
    console.error('Erro ao conectar ao PostgreSQL', err);
  });