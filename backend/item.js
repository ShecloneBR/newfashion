const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.user,
  password: process.env.senha,
  database: 'banco_de_dados_de_teste'
});


connection.connect();


connection.query('SELECT * FROM tabela', function (error, results, fields) {
  if (error) throw error;

  
  console.log(results);

 
  connection.end();
});
