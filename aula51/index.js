// return
// retorna um valor
// Termina a função

/*function soma(a, b) {
    return a + b;
}

function soma2(a, b) {
    console.log(a + b)
}

soma2(2, 3)*/

/*document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
})*/ //essa function não retorna valor

/*function falaComeco(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto
    }
    return falaResto
}

const primeiraFala = falaComeco('Olá')
const falaCompleta = primeiraFala('Mundo!')
console.log(falaCompleta)*/ //*function com retorno aninhadas*

function criaMultiplicador(multiplicador) {
    return function(numero) {
        return numero * multiplicador
    }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))