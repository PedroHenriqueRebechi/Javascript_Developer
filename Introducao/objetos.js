// Objeto
const teste = {   
    nome: 'Vitor Meira',   
    idade: 23,

    descrever: function () {   
        console.log(`Meu nome é ${this.nome}`)
    }
};

console.log(teste)
console.log(teste.nome)
teste.descrever()

teste.altura = 1.78; // Adicionando 

console.log(teste.altura)

const atributo = 'idade';
console.log(pessoa[atributo])