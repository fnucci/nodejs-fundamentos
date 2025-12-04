const agora = new Date()

console.log(agora)
console.log(agora.getFullYear())
console.log(agora.getMonth())
console.log(agora.getDate())
console.log(agora.getHours())
console.log(agora.getMinutes())
console.log(agora.getSeconds())

const nascimento = new Date('1989-02-15:22:45:44.679Z') //iso 8601

console.log(nascimento)
console.log(nascimento.toLocaleDateString('pt-BR')) //formato da data