const lista = [1,2,3,4,5,6,7]

// Reduz a lista a um unico valor

// Exemplo: Quero somar os numeros da lista
const soma = lista.reduce((previous, current) => {
    return previous + current
})

console.log(soma)
// 1 + 2
// 3 + 3
// 6 + 4
// 10 + 5
// 15 + 6
// 21 + 7
// 28