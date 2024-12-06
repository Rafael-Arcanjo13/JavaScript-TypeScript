// Função declarada com a palavra fuction tem uma variavel especial chamada 'arguments' que sustenta todos os argumentos enviados

/*function funcao() {
    let soma = 0;
    for (let argumentos of arguments) {
        soma += argumentos
    }
    console.log(soma)
}
funcao(1, 2, 3, 4, 5, 6, 7, 8)*/

/*function funcao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
}
funcao([2, 5, 1])*///Função com atribuição via desestruturação

function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }

    console.log(acumulador)
}

conta('+', 0, 10, 20, 30, 40)