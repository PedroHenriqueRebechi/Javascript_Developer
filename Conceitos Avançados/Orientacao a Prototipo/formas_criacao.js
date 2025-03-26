// Primeira forma
const pessoa = {
    genero: 'masculino'
}

const renan = {
    nome: 'Renan',
    __proto__: pessoa
}

// Segunda forma
const renan2 = Object.create(pessoa)
renan2.nome = 'Renan'

