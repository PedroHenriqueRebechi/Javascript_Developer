// EXERCICIO 1
class Carro {
    marca;
    cor;
    gastoMedioKm;

    constructor(marca, cor, gastoMedioKm){
        this.marca = marca
        this.cor = cor
        this.gastoMedioKm = gastoMedioKm
    }

    calcularPercurso(distanciaKm, precoCombustivel){
        let total = distanciaKm * this.gastoMedioKm * precoCombustivel
        console.log(`O percurso custará R$${total}.`)
    }

}

let carro1 = new Carro('Fiat', 'Preto', 0.5)
carro1.calcularPercurso(100, 6.90)

// EXERCICIO 2
class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularIMC (){
        let imc = this.peso / (Math.pow(this.altura, 2))
        return imc
    }
}

let pessoa1 = new Pessoa('José', 82, 1.85)
console.log('O IMC é ' + pessoa1.calcularIMC().toFixed(2))