//closures - é exatamente a habilidade da function em acessar o seu escopo léxico

function  retornaFuncao(nome) {
    return function() {
        return nome
    }
}

const funcao = retornaFuncao('Rafa')
const funcao2 = retornaFuncao('Arcanjo')
console.log(funcao())
console.log(funcao2())