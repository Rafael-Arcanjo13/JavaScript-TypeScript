// Preencha um array de 30 posições com números gerados de forma randômica. Depois, percorra o array e faça a soma de todos os números primos desse array. Obs.: Número primo é aquele que pode ser dividido por apenas dois fatores: o número um e ele mesmo.

const randomNum = () => {
    Math.random() * (100 - 1) + 1;
}
