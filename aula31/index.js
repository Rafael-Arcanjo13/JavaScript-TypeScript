const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Arcanjo',
    idade: 18,
    endereco: {
        rua: 'Itapecopa',
        numero: 40
    }
};

const {nome: n1, endereco: { rua: r, numero: num}, endereco} = pessoa
console.log(n1, num, r, endereco)