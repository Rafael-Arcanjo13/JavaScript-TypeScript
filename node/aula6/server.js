const express = require('express');
const app = express();

//         Criar  Ler   Atualizar apagar
// CRUD -> CREAT, READ, UPDATE,   DELETE
//         POST   GET   PUT       DELETE

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

app.get('/', (request, respose) => {
    respose.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        `);
});

app.post('/', (request, response) => {
    response.send('Recebi o formulário');
})

app.get('/contato', (request, response) => {
    response.send('Obrigado por entrar em contato com a gente.');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
});