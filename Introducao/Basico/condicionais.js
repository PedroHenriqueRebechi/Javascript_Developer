const eNumeroPar = 11 % 2 === 0; // Tipagem importa
const numeroPar = 10 % 2 == '0'; // Tipagem não importa

console.log(eNumeroPar)
console.log(numeroPar)

if (10 % 2 === 0 ) {
    console.log("É par");
} else {
    console.log("É impar") 
}

// Desafio 

const precoEtanol = 5.00
const precoGasolina = 6.00
let tipoCombustivel = 'Gasolina'
const gastoMedioGasolinaKm = 3
const gastoMedioEtanolKm = 5 
const distanciaKm = 300


if (tipoCombustivel === 'Gasolina') {
    let valor = (distanciaKm / gastoMedioGasolinaKm) * precoGasolina
    console.log(valor)
} else if (tipoCombustivel === 'Etanol') {
    let valor = (distanciaKm / gastoMedioEtanolKm) * precoEtanol
    console.log(valor)
} else {
    console.log('Erro')
}

