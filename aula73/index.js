/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)
*/


//const caneca = {
//    ...produto,
//    material: 'vidro'
//} - spread (melhor jeito)

//const caneca = Object.assign({}, produto, { material: 'Porcelana'}) - Object.assign(des, any)


const produto = { nome: 'Produto', preco: 1.8 }
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome')) - mostra as propriedades do object