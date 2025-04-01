function soma (x) {
    return function(y) {
        return x + y
    }
}

console.log(soma(10)(20))

const somaParcial = soma(10)
console.log(somaParcial(30))