// Programa que calcula salário a transferir 

const salarioBruto = 2000;
const beneficios = 250;
let imposto = null;

if (salarioBruto <= 1100.00) {
    imposto = salarioBruto * 0.05
} else if (salarioBruto <= 2500.00) {
    imposto = salarioBruto * 0.1
} else {
    imposto = salarioBruto * 0.15
}

let salarioLiquido = salarioBruto - imposto + beneficios
console.log(salarioLiquido)