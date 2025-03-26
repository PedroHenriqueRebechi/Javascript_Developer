const pessoa = {
    idade: 18
}


const renan = {
    nome: 'renan',
    idade: 43,
    __proto__: pessoa
}

// Procura primeiro no objeto renan
console.log(renan.idade)
