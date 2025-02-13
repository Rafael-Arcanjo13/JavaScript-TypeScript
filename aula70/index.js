// Object constructor
/*const pessoa1 = new Object()
pessoa1.nome = 'Rafael'
pessoa1.sobrenome = "Arcanjo"

// Object Literal
const pessoa2 = {
    nome: 'Rafael',
    sobrenome: 'Arcanjo'
}

console.log(pessoa1)
console.log(pessoa2) */

// ===== EXEMPLO COM METODOS =====
/*
const pessoa1 = new Object()
pessoa1.nome = 'Rafael';
pessoa1.sobrenome = "Arcanjo";
pessoa1.idade = 19;
pessoa1.falarNome = function() {
    return (`${this.nome}, está falando o seu nome.`)
};
pessoa1.getDataNascimento = function() {
    const data = new Date();
    return data.getFullYear() - this.idade;
}


console.log(pessoa1.falarNome())
console.log(pessoa1.getDataNascimento()) */

// FACTORY FUNCTIONS 

/* function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Rafael', 'Arcanjo');
console.log(p1.nomeCompleto) */

// CONSTRUCTOR FUNCTION 

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Rafael', 'Arcanjo')
console.log(p1)