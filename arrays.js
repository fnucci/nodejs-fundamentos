const frutas = [
    'banana',
    'maça',
    'morango',
    'melao',
    'melancia'
]
frutas.push('pitaya')

console.log(frutas)
console.log('Primeira fruta: ', frutas[0])
console.log('Total de frutas', frutas.length)
console.log('Ultima fruta: ', frutas[frutas.length - 1])

frutas.splice(2, 1)
console.log('Apos remover: ', frutas)

for(let i = 0; i < frutas.length; i++){
    console.log('obtendo fruta no array: ', frutas[i])
}

frutas.forEach((fruta, i) =>{
    console.log('Obtendo frutas por foreach: ', i, fruta)
})

for(fruta of frutas){
    console.log('Obtendo a fruta com for of: ', fruta)
}