function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
}

Camiseta.prototype = Object.create(Produto.prototype);

const c1 = new Camiseta('Regata', 7.5, 'Preta');
c1.aumento(10)
console.log(c1)