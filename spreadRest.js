const pessoa = {
    nome: 'Felipe',
    idade: 36,
    profissao: 'Desenvolvedor'
}

const pessoa2 = {...pessoa}

pessoa2.profissao = 'QA'

pessoa3 = {
    ...pessoa,
    profissao: 'Ui/UX'
}

const {nome, ...resto} = pessoa

console.log(pessoa)
console.log(pessoa2)
console.log(pessoa3)
console.log(nome)
console.log(resto)

const frutas = [
    'banana',
    'maça',
    'morango',
    'melao',
    'melancia'
]

const maisFrutas = [
    'kiwi',
    'pitaya',
    'pera'
]

const clone = [...maisFrutas]
clone.push('ameixa')

const todasFrutas = [...frutas, ...maisFrutas]

const [primeira, segunda, ...restante] = todasFrutas

console.log(frutas)
console.log(maisFrutas)
console.log(clone)
console.log(todasFrutas)
console.log(primeira)
console.log(segunda)
console.log(restante)