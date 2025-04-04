const lista = [1,2,3,4,5,6]

// Retorna lista nova
const listaPares = lista.filter((element) => {
    return (element % 2 === 0)
})

console.log(lista)
console.log(listaPares)