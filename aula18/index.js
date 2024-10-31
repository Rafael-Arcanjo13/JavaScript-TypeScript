function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade}
}

const pessoa1 = criaPessoa('Rafael', 'Arcanjo', 18)
const pessoa2 = criaPessoa('Gabriela', 'Alice', 20)


console.log(`${pessoa1.nome} vai se casar com a ${pessoa2.nome}`)