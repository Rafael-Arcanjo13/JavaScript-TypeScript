const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}))

// http://facebook.com/profiles/12345?campanha=googleads&nome_capanha=seila

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="qualquercoisa"><br>
        Outro campo: <input type="text" name="aquioutrocampo">
        <button>Enviar</button>
        </form>
        `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    // /porfiles/3
    // /profiles/?chave=1$chave2=valor2
    //
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebookprofile)
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.qualquercoisa}`);
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
});