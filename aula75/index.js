/*
const letraA = {
    chaveA: 'A'
}
const letraB = {
    chaveB: 'B'
}
const letraC = {
    chaveC: 'C'
}
const letraD = {
    chaveD: 'D'
}
const letraE = {
    chaveE: 'E'
}

Object.setPrototypeOf(letraB, letraA)
Object.setPrototypeOf(letraC, letraB)
Object.setPrototypeOf(letraD, letraC)
Object.setPrototypeOf(letraE, letraD)

console.log(letraE.chaveA)
*/

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);

const p2 = {
    nome: 'Caneca',
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype)

p2.aumento(10)

const p3 = Object.create(Produto.prototype, {
    preco: {
        configurable: true,
        writable: true,
        enumerable: true,
        value: 100
    }
})

p3.aumento(100)

console.log(p3)