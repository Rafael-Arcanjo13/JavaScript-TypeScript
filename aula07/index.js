// uma const é uma variável com um valor contante
// É possível evoluir a variável const para outra variável
// Podemos utilizar o simbolo de '+' para concatenar e para somar números
// Utilizamos 'typeof' para mostrar o tipo de algum valor (string || number);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultaTriplicado = resultado * 3;
resultaTriplicado = resultaTriplicado + 5;
console.log(resultaTriplicado)
console.log(typeof (primeiroNumero + segundoNumero))