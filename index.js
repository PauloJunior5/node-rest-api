const express = require('express');

const app = express();

app.listen(3000, () => console.log('Servidor rodando na porta 3000!'));

app.get('/atendimentos', (request, response) => response.send(
    'Servidor rodando na rota de atendimentos e está realizando um get!'));