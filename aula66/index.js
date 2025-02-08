const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numeroDuplicados = numeros.map(valor => valor*2)
//console.log(numeroDuplicados)

const pessoas = [
    { nome: 'Rafael', idade: 18},
    { nome: 'Gabriela', idade: 20},
    { nome: 'Gabriel', idade: 19},
    { nome: 'Alerrandro', idade: 19},
    { nome: 'Teo', idade: 30},
    { nome: 'Ciclano', idade: 51},
];

const nomeDasPessoas = pessoas.map(obj => obj.nome)
//console.log(nomeDasPessoas)
const chaveNomeRemovida = pessoas.map(obj => ({idade: obj.idade})) //Retorna o array com os nomes removidos
//console.log(chaveNomeRemovida)
const comIds = pessoas.map((obj, indice) => {
    const newBbj = { ...obj };
    newBbj.id = indice;
    return newBbj;
})

console.log(comIds)
console.log(pessoas)

// Lembrar que pode ser que eu esteja mechendo no obj original - é necessário fazer uma cópia do obj para adicionar uma nova propriedade.