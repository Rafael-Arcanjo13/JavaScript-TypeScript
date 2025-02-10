const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
//const total = numeros.reduce(function(acumulador, valor, indice, array) {}, 0)
const totalNumerosPares = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) {
        acumulador += valor
    }
    return acumulador
}, 0);

//console.log(total)







const pessoas = [
    { nome: 'Rafael', idade: 18},
    { nome: 'Gabriela', idade: 20},
    { nome: 'Gabriel', idade: 19},
    { nome: 'Alerrandro', idade: 19},
    { nome: 'Teo', idade: 30},
    { nome: 'Ciclano', idade: 51},
];

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador
    return valor
})

console.log(pessoaMaisVelha)