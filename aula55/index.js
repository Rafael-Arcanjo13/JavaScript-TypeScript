// IIFE -> Immediately invoked function expression
// Server para remover a função do escopo global, fazendo com que ela seja executada imediatamente

(function() {

    const sobrenome = 'Arcanjo'
    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome() {
        console.log(criaNome('Rafael'))
    }

    falaNome()
})()