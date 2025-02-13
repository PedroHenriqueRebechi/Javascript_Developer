const entradas = [3, 50, 30, 92, 65, 45, 32];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;    
}



function print(texto){
    console.log(texto)
}

module.exports = { gets, print };