function Pessoa(nome, sobrenome) {
    const ID = 123456;

    const metodoInterno = () => {
        
    }

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método.')
    };
}

const p1 = new Pessoa('Rafael', 'Arcanjo')
const p2 = new Pessoa('Gabriela', 'Alice')

p1.metodo()

// Atributos público utilizam a palavra this, pois você pode acessar com a notação de ponto fora da function
// Atributos privados não utilizam a palavra this, simplesmente são declarados.
// Sempre declarar a constructor function com a 1ª letra maiuscula
// Sempre que for construir um novo objeto utilizando a função deve-se utilizar a palavra 'new'
