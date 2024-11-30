function falaOi() {
    return console.log('oi')
}

falaOi()

const meuNome = function() {
    console.log('O meu nome é Rafael')
}

function executaFuncao(funcao) {
    console.log('O meu nome vai aparecer logo abaixo: ')
    funcao()
}

executaFuncao(meuNome)