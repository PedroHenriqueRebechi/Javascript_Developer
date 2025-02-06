class Pessoa {
    nome; 
    idade;

    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

// Instancia
const vitor = new Pessoa();
vitor.nome = 'Vitor J Guerra';
vitor.idade = 20

const renan = new Pessoa('Renan Meira', 23)

vitor.descrever()
renan.descrever()

// Em funcoes
function compararPessoas(pessoa1, pessoa2) {
    if (pessoa1.idade > pessoa2.idade) {
        console.log(`${pessoa1.nome} é mais velho`)
    } else {
        console.log(`${pessoa2.nome} é mais velho`)
    }
}

compararPessoas(vitor, renan)