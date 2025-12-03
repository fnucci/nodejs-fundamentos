const idade = 36

const maiorIdade = idade>=18

const possuiCNH = false

const podeDirigir = maiorIdade && possuiCNH
const podeViajar = maiorIdade || possuiCNH
const acompanhante = !maiorIdade

console.log('Pode dirigir? ', podeDirigir)
console.log('Pode viajar? ', podeViajar)
console.log('Acompanhante? ', acompanhante)