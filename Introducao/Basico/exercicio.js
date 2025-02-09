// Programa que dado um numero imprima sua tabuada

const numero = 5;

for (let index = 1; index < 11; index++) {
    console.log(numero * index)
}

// Programa que é capaz de percorrer lista de numeros e imprima cada numero par encontrado

const numeros = [1,2,3,4,5,6,7]

for (let index = 0; index < numeros.length; index++) {

    if (numeros[index] % 2 == 0) {
        console.log(numeros[index])
    }
       
    else {
        continue
    }
}