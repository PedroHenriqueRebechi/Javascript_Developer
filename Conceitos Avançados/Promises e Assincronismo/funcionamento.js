// Criando Promise
const promessaDeNumeroQualquer = new Promise((resolve, reject) => {
    // Processamento assíncrono
    const numero = parseInt(Math.random() * 100)

    // Caso de certo
    resolve(numero)

    // Caso de errado
    reject()
})

promessaDeNumeroQualquer
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.error(error)
    })
    .finally(() => {
        console.log('finalizou')
    })