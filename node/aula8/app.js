const express = require('express');
const app = express();

app.get('/produto/:categoria/:nome/:preco', (req, res) => {
    const { categoria, nome, preco } = req.params;
    const precoNum = Number(preco);
    res.send(preco > 1000
         ? `O produto ${nome} da categoria ${categoria} custa R$ ${precoNum} e é considerado caro.`
         : `O produto ${nome} da categoria ${categoria} custa R$ ${precoNum} e tem um bom preço.`);
});

app.get('/', (req, res) => {
    res.send('Recebi o formulário.')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000 ')
});