const readline = require('readline')

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Digite um nome?', (nome)=> {
    console.log('Bem vindo(a)', nome)
    leitor.close();
})