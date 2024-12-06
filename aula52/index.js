const nome = 'Rafa'

function falaNome() {
    console.log(nome)
}

function usaFalaNome() {
    const nome = 'otavio'
    falaNome()
}

usaFalaNome()

//Escopo léxico - a function fica envolvida em uma bolha, ou seja, ela vai sempre busca a variavel solicitada no seu proprio escopo, se não encontrar, vai para o pai, se não achar tbm vai ir subindo até o escopo global.