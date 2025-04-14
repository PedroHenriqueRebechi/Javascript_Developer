const path = require('path')
const fs = require('fs')

const filePath = path.resolve(__dirname, 'tarefas.csv')

// const promessaDaLeituraDoArquivo = fs.promises.readFile(filePath)

async function buscarArquivo() {
    const arquivo = await fs.promises.readFile(filePath)
    const textoDoArquivo = arquivo.toString('utf-8')
    console.log(textoDoArquivo)
}

buscarArquivo()