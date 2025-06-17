const minhaPromisse = new Promise((resolve, reject) => {
    let valor = false;
    if(valor) resolve('O valor é verdadeiro!');
    if(!valor) reject('Valor indesejado!');
})

minhaPromisse
.then(resposta => {
    console.log('True: ', resposta);
})
.catch(e => {
    console.log('Erro: ', e);
})