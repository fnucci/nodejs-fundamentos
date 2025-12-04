const pessoa = {
    nome: 'Felipe',
    idade: 36,
    profissao: 'Desenvolvedor'
}

const {nome, idade} = pessoa

console.log(nome)
console.log(idade)

function saudacao ({nome}){
    console.log('Ola, ', nome)
}

saudacao(pessoa)

const frutas = [
    'banana',
    'maça',
    'morango',
    'melao',
    'melancia'
]

const [primeira, segunda] = frutas

console.log(primeira)
console.log(segunda)