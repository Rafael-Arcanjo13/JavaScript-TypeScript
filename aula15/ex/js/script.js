const numero = Number(prompt('Digite um número:'))
const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('text')

numeroTitulo.innerHTML = numero
texto.innerHTML = `Raiz quadrada: ${numero ** 0.5} </br>`
texto.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)} </br>`
texto.innerHTML += `É NaN: ${Number.isNaN(numero)} </br>` 
texto.innerHTML += `Arredondando para cima: ${Math.ceil(numero)} </br>` 
texto.innerHTML += `Arredondando para baixo: ${Math.floor(numero)} </br>`
texto.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}`  