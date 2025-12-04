// 1. Destructuring em objetos 

const usuario = { 

nome: "Lucas", 

idade: 28, 

email: "lucas@email.com" 

}; 

const { nome, idade, email } = usuario; 

console.log(nome, idade, email); 

 

// 2. Destructuring em arrays 

const linguagens = ["JavaScript", "Python", "Ruby"]; 

const [ling1, ling2, ling3] = linguagens; 

console.log(ling1, ling2, ling3); 

 

// 3. Rest operator em função 

function somarTudo(...numeros) { 

return numeros.reduce((total, num) => total + num, 0); 

} 

console.log(somarTudo(1, 2, 3, 4)); // 10 

 

// 4. Spread operator com arrays 

const frutas1 = ["maçã", "banana"]; 

const frutas2 = ["laranja", "uva"]; 

const todasFrutas = [...frutas1, ...frutas2]; 

console.log(todasFrutas); 

 

// 5. Spread operator com objetos 

const dados1 = { nome: "Joana" }; 

const dados2 = { idade: 32 }; 

const perfil = { ...dados1, ...dados2 }; 

console.log(perfil); 

 

// 6. Função com parâmetro default 

function saudacao(nome = "visitante") { 

console.log(`Olá, ${nome}!`); 

} 

saudacao(); // Olá, visitante! 

saudacao("Marcos"); // Olá, Marcos! 

 

// 7. Trabalhando com datas 

const hoje = new Date(); 

const dia = hoje.getDate(); 

const mes = hoje.getMonth() + 1; // mês começa em 0 

const ano = hoje.getFullYear(); 

console.log(`Hoje é ${dia}/${mes}/${ano}`); 

 

// 8. Modularização (CommonJS) 

// Arquivo: somar.js 

// module.exports = function somar(a, b) { 

// return a + b; 

// } 

 

// Arquivo: app.js 

// const somar = require('./somar'); 

// console.log(somar(5, 3)); 

 

// Ou usando ES Modules (Node com "type": "module") 

// export function somar(a, b) { 

// return a + b; 

// } 

 

// import { somar } from './somar.js'; 

// console.log(somar(5, 3)); 

 

// 9. Classe com construtor 

class Livro { 

constructor(titulo, autor) { 

this.titulo = titulo; 

this.autor = autor; 

} 

 

descrever() { 

return `O livro "${this.titulo}" foi escrito por ${this.autor}.`; 

} 

} 

 

const livro1 = new Livro("Dom Casmurro", "Machado de Assis"); 

const livro2 = new Livro("1984", "George Orwell"); 

console.log(livro1.descrever()); 

console.log(livro2.descrever()); 