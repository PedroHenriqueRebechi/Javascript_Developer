// Maior numero par e impar 
const {gets, print} = require('../Importacoes/exercicio_funcoes.js')

// Informa N (quantidade de numeros) que serão recebidos
const quantidadeNumeros = 6;
let numeros = [];

for (let index = 0; index < quantidadeNumeros; index++) {
    numeros.push(gets())    
}

maiorNumeroPar = null;
maiorNumeroImpar = null;

for (let index = 0; index < numeros.length; index++) {

    if (numeros[index] % 2 == 0) {

        if (numeros[index] > maiorNumeroPar) {
            maiorNumeroPar = numeros[index]
        }

    } else {

        if (numeros[index] > maiorNumeroImpar) {
            maiorNumeroImpar = numeros[index]
        }
    }
}

print(`Maior número par: ${maiorNumeroPar}`)
print(`Maior número impar: ${maiorNumeroImpar}`)