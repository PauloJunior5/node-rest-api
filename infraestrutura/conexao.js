const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'paulo',
    password: '',
    database: 'agenda-petshop'
});

module.exports = conexao;