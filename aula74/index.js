function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

const p1 = new Pessoa('Rafa', 'A');
const data = new Date();

console.log(Pessoa.prototype === p1.__proto__)
console.log(p1.nomeCompleto())