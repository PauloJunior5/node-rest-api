const { response } = require("express");

module.exports = app => {
    app.get('/atendimentos', (request, response) => response.send(
        'Servidor rodando na rota de atendimentos e está realizando um GET!')
    );

    app.post('/atendimentos', (request, response) => {
        console.log(request.body)
        response.send('Servidor rodando na rota de atendimentos e está realizando um POST!')
    });
}