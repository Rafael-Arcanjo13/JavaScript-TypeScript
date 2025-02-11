// Preencha um array de 30 posições com números gerados de forma randômica. Depois, percorra o array e faça a soma de todos os números primos desse array. Obs.: Número primo é aquele que pode ser dividido por apenas dois fatores: o número um e ele mesmo.

let num = [];

const numRandom = () => {
    for (let i = 0; i < 30; i++) {
        const randomNumbers = Math.round(Math.random() * (100 - 1) + 1);
        num.push(randomNumbers)
    }
    return num
}
const numerosAleatorio = numRandom()
console.log(`O numeros randomicos: ${numerosAleatorio}`)

const isPrimo = (numero) => {
    if(numero < 2) return false;
    for(let i = 2; i <= Math.sqrt(numero); i++) {
        if(numero % i === 0) return false;
    }
    return true
};

const somaPrimos = numerosAleatorio.reduce((acumulador, valor) => {
    if(isPrimo(valor)) return acumulador + valor
    return acumulador;
}, 0)

console.log(`A soma dos números primos é: ${somaPrimos}`)