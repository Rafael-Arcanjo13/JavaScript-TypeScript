function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        },

        fala(assunto = 'falando NADA') {
            return `${this.nome} está ${assunto}`
        },

        altura,
        peso,

        imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2);
        }
    }
}

const pessoa1 = criaPessoa('Rafael', 'Arcanjo', 1.70, 54)
pessoa1.nomeCompleto = 'Gabriela Alice da Silva'
console.log(pessoa1.nomeCompleto)
console.log(pessoa1.fala())
console.log(pessoa1.imc())



//No exemplo de uma function que cria pessoa, o metodo 'this' vai sempre se referir a pessoa especifica que vai está sendo criada pela function.

// A palavra get antes de um metodo(função dentro do object) faz com que o metodo finja ser um atributo do object - Getter

// Setter - o set é utilizado para reatribuir um valor a uma função getter. Setar um novo valor