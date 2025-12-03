const pessoa = {
    nome: 'Felipe',
    idade: 36,
    temCnh: true
}

pessoa.sobrenome = 'Nucci'

console.log(pessoa)

delete pessoa.temCnh

console.log(pessoa)

console.log(pessoa['nome']) //se a chave nao existir retorna undefined