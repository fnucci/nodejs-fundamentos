const pessoa = {
    nome: 'Felipe',
    idade: 36,
    nacionalidade: 'Brasileiro',
    pets: ['nina', 'pirulita']
}

for (chave in pessoa){
    console.log(chave)
    console.log(pessoa[chave])
}

const chaves = Object.keys(pessoa)
const valores = Object.values(pessoa)
const entradas = Object.entries(pessoa)

console.log(chaves)
console.log(valores)
console.log(entradas)