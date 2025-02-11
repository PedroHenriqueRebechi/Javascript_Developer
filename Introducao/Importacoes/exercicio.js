// Importanto funções e utilizando destructing
const {gets, print} = require('./exercicio_funcoes.js'); 

const numerosSorteados = [];

for (let index = 0; index < 5; index++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

let maiorValor = 0;

for (let index = 0; index < numerosSorteados.length; index++) {
    const numeroSorteado = numerosSorteados[index]
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(numerosSorteados)
print(maiorValor)