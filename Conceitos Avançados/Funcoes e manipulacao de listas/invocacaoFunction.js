
const pessoa = {
    nome: 'Renan',
    idade: 30
}

function gritar (prefixo) {
    console.log(prefixo, this.nome)
}

// Invocação direta 
gritar()

// Call
gritar.call(pessoa, 'Olaaa')

// Apply - Coloca no contexto do objeto
gritar.apply(pessoa, ['Olaaa'])

// New
