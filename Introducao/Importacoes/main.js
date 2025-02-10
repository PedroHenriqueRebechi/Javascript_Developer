// Importando funções

// Primeiro método
const funcoes = require('./funcoes_auxiliares.js');

console.log(funcoes)
console.log(funcoes.gets())

// Segundo método
const {gets, print} = require('./funcoes_auxiliares.js');

print(gets())