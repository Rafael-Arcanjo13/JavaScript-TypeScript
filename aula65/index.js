// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosFiltrados = numeros.filter(valor => valor > 10)
//console.log(numerosFiltrados)

const pessoas = [
    { nome: 'Rafael', idade: 18},
    { nome: 'Gabriela', idade: 20},
    { nome: 'Gabriel', idade: 19},
    { nome: 'Alerrandro', idade: 19},
    { nome: 'Teo', idade: 30},
    { nome: 'Ciclano', idade: 51},
];

// const pessoasComNomeGrande = pessoas.filter(objeto => objeto.nome.length >= 5)
// const pessoasComMaisDeCinquentaAnos = pessoas.filter(objeto => objeto.idade > 50)
const pessoasNomeTerminaComA = pessoas.filter(objeto => objeto.nome.toLowerCase().endsWith('a'))
console.log(pessoasNomeTerminaComA)


// FORMA SEM O METODO FILTER
//for (valor of numeros) {
//    if (valor > 10) {
//        console.log(valor)
//    }
//}