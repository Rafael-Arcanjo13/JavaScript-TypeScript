const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const pares = numeros.reduce(function(acumulador, numero) {
    acumulador.push(numero * 2)
    return acumulador
}, [])

//console.log(pares)






const pessoas = [
    { nome: 'Rafael', idade: 18},
    { nome: 'Gabriela', idade: 20},
    { nome: 'Gabriel', idade: 19},
    { nome: 'Alerrandro', idade: 19},
    { nome: 'Teo', idade: 30},
    { nome: 'Ciclano', idade: 51},
];

const pessoaVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador
    return valor
})

console.log(pessoaVelha)