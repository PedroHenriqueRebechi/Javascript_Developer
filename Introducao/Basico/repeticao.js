for (let i = 0; i < 10; i++) {
    console.log(i)
}

const nome = 'Pedro Henrique'
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}


const notas = [];

notas.push(6)
notas.push(7)
notas.push(9)
notas.push(6)

let soma = 0;

for (let index = 0; index < notas.length; index++) {
    const nota = notas[index];
    soma = soma + nota;
}

const media = soma / notas.length
console.log(media)
