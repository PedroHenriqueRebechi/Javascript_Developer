// Orientação a Prototipos
const pessoa = {
    genero: 'masculino'
}

// Herança
const pedro = {
    nome: 'Pedro',
    idade: 18,
    __proto__: pessoa 
}

console.log(pedro)
console.log(pedro.genero)

// Função construtora
function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

// Método
Pessoa.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
}

const renan = new Pessoa('Renan',30)

console.log(renan)
renan.falar()

// Outro método para o mesmo resultado - Usando classes
class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    // Método
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}