// First class functions
// Higher order functions


// function declaration

function falarMeuNome() {
    console.log('Meu nome é Pedro')
}

const referenciaNova = falarMeuNome
referenciaNova()

function falarMeuNomeCompleto(falarMeuNome) {
    falarMeuNome()
    console.log('Henrique Rebechi')
}

falarMeuNomeCompleto(falarMeuNome)



// function expression

const nomeDeOutraFuncao = function () {
    console.log('Function Expression')
}