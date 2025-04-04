
class Pessoa {
    constructor(name) {
        this.name = name
    }
}

const lista = [new Pessoa('Renan'), new Pessoa('Pedro'), new Pessoa('Julia')]

// Converter lista de objeto para apenas os nomes

const listaNomes = lista.map((element) => {
    return element.name
})

console.log(lista)
console.log(listaNomes)