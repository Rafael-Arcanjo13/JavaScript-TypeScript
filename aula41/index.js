// Escreva uma função que recebe 2 números e retorne o maior deles

function maiorNum(n1, n2) {
    return Math.max(n1, n2);
}

const max2 = (n1, n2) => n1 > n2 ? n1 : n2;

console.log(max2(10, 20))
console.log(maiorNum(8, 4))