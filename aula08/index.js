const nome = 'Rafael Arcanjo'
const sobrenome = 'dos Santos Silva'
let idade = 18
let peso = 54
const altura = 1.69
const imc = peso / (altura * altura)
const nascimento = 2024 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${altura} de altura e seu IMC é de ${imc}. ${nome} nasceu em ${nascimento}.`)

// Forma mais atualizada de chamar uma variável dentro de um console é colocando tudo dentro de crase e chamando a variável com ${}.