/*let a = 'A'
let b = 'B'
let c = 'C'

let letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c)*/

//const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//const primeiroNumero = numeros[0]
//console.log(primeiroNumero)

const numeros = [16, 24, 32, 47, 54, 65, 75, 836, 93]
let [num1, num2, num3, ...resto] = numeros
console.log(resto)