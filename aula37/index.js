const pessoas = ['Rafael', 'Gabriela', 'Pichita']

for (let i = 0; i < pessoas.length; i++) {
    console.log(pessoas[i])
}

for (let i in pessoas) {
    console.log(pessoas[i])
}

for (let i of pessoas) {
    console.log(i)
}

pessoas.forEach(function(valor, indice, array) {
    console.log(valor, indice, array)
})