// Calculando média de um aluno

const notas = [10,10,9,10]
let somaDasNotas = 0

for (let index = 0; index < notas.length; index++) {
    somaDasNotas = notas[index] + somaDasNotas
}

const media = somaDasNotas / notas.length

if (media < 5) {
    console.log("Reprovado")
} else if (media >= 5 && media < 7) {
    console.log("Recuperação")
} else {
    console.log("Aprovado")
}

console.log(media)