// 1. Criando um objeto pessoal 

const pessoa = { 

nome: "João", 

idade: 30, 

profissao: "Desenvolvedor" 

}; 

 

// 2. Acessando propriedades 

console.log("Nome:", pessoa.nome); 

 

// 3. Atualizando valores 

pessoa.idade = 31; 

console.log("Nova idade:", pessoa.idade); 

 

// 4. Adicionando uma nova propriedade 

pessoa.cidade = "São Paulo"; 

console.log("Cidade adicionada:", pessoa.cidade); 

 

// 5. Função com objeto 

function apresentarPessoa(p) { 

return `Olá! Meu nome é ${p.nome}, tenho ${p.idade} anos e sou ${p.profissao}.`; 

} 

console.log(apresentarPessoa(pessoa)); 

 

// 6. Lista de pessoas 

const pessoas = [ 

{ nome: "Ana", idade: 17 }, 

{ nome: "Carlos", idade: 22 }, 

{ nome: "Mariana", idade: 15 } 

]; 

 

// 7. Filtrando maiores de idade 

for (let p of pessoas) { 

if (p.idade >= 18) { 

console.log(`${p.nome} é maior de idade.`); 

} 

} 

 

// 8. Objeto com método 

const usuario = { 

nome: "Beatriz", 

saudacao: function() { 

console.log(`Olá, eu sou ${this.nome}`); 

} 

}; 

usuario.saudacao(); 

 

// 9. Listando propriedades com for...in 

for (let chave in pessoa) { 

console.log(`${chave}: ${pessoa[chave]}`); 

} 

 

// 10. Cálculo de compra 

const produto = { 

preco: 25, 

quantidade: 4 

}; 

const valorTotal = produto.preco * produto.quantidade; 

console.log(`Valor total da compra: R$${valorTotal}`); 