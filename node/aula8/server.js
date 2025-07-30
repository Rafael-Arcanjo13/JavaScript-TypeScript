const express = require('express');
const app = express();

// http://facebook.com/profiles/12345?campanha=googleads&nome_capanha=seila

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
        `);
});

app.get('/testes/:idUsuarios', (req, res) => {
    console.log(req.params);
    res.send(req.params.idUsuarios)
})

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
});