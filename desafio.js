// 1. Mensagem de boas-vindas 

let nome = "João da Silva"; // substitua pelo seu nome completo 

console.log("Olá, " + nome + "! Seja bem-vindo(a) ao curso de JavaScript!"); 

 

// 2. Cálculo de idade 

let anoAtual = 2025; 

let anoNascimento = 1990; 

let idadeDesafio1 = anoAtual - anoNascimento; 

console.log("Você tem " + idadeDesafio1 + " anos."); 

 

// 3. Mensagem de localização 

let cidade = "São Paulo"; 

let estado = "SP"; 

let pais = "Brasil"; 

console.log("Você está em " + cidade + " - " + estado + ", " + pais + "."); 

 

// 4. Tipo da variável 

let temCarteira = true; 

console.log(typeof temCarteira); // imprime: boolean 

 

// 5. Simulação bancária simples 

let saldo = 0; // saldo inicial 

saldo += 200; // depósito 

saldo -= 50; // saque 

console.log("Saldo final: R$" + saldo); 

 

// 6. Média de notas 

let matematica = 8; 

let portugues = 7; 

let ciencias = 9; 

let mediaDesafio1 = (matematica + portugues + ciencias) / 3; 

console.log("Média final: " + mediaDesafio1); 

 

// 7. Reajuste de salário 

let salario = 3000; 

let novoSalario = salario * 1.10; // aumento de 10% 

console.log("Após um aumento de 10%, o novo salário é R$" + novoSalario); 

 

// 8. Contador de cliques 

let cliques = 0; 

cliques++; 

cliques++; 

cliques++; 

console.log("O botão foi clicado " + cliques + " vezes."); 

 

// 9. Constantes não podem ser alteradas 

const PI = 3.14; 

// PI = 3.1415; // ❌ Isso causaria erro pois constantes não podem ser modificadas 

console.log("PI é uma constante e não pode ser alterada: " + PI); 

 

// 10. Concatenando tipos diferentes 

let mensagem = "O número é "; 

let numero = 42; 

let combinado = mensagem + numero; 

console.log(combinado); // "O número é 42" 

console.log(typeof combinado); // string 

//desafio 2

// 1. Verificação de maioridade 

let idade = 20; 

if (idade >= 18) { 

console.log("Você é maior de idade."); 

} else { 

console.log("Você é menor de idade."); 

} 

 

// 2. Situação do aluno 

let nota1 = 6; 

let nota2 = 8; 

let media = (nota1 + nota2) / 2; 

if (media >= 7) { 

console.log("Aprovado"); 

} else { 

console.log("Reprovado"); 

} 

 

// 3. Simulação de troco 

let valorCompra = 35.90; 

let valorPago = 50; 

let troco = valorPago - valorCompra; 

console.log("Troco a ser devolvido: R$" + troco); 

 

// 4. Validação de senha 

let senha1 = "123abc"; 

let senha2 = "123abc"; 

if (senha1 === senha2) { 

console.log("Senhas iguais."); 

} else { 

console.log("As senhas não coincidem."); 

} 

 

// 5. Controle de faltas 

let totalAulas = 80; 

let faltas = 25; 

let limiteFaltas = totalAulas * 0.25; 

if (faltas > limiteFaltas) { 

console.log("Faltas acima do permitido."); 

} else { 

console.log("Frequência adequada."); 

} 

 

// 6. Verificação de login 

let temLogin = true; 

let temSenha = true; 

if (temLogin && temSenha) { 

console.log("Acesso permitido."); 

} else { 

console.log("Acesso negado. Dados incompletos."); 

} 

 

// 7. Valor negado 

let disponivel = true; 

console.log("Disponibilidade invertida: " + !disponivel); 

 

// 8. Condições compostas 

let numero1 = 4; 

let numero2 = 4; 

if (numero1 % 2 === 0 && numero2 % 2 === 0 && numero1 === numero2) { 

console.log("Os números são pares e iguais."); 

} else { 

console.log("Os números não atendem todas as condições."); 

} 

 

// 9. Calculadora de porcentagem 

let total = 120; 

let porcentagem = total * 0.15; 

console.log("15% de 120 é igual a " + porcentagem); 

 

// 10. Ordem de operações 

let resultado = 2 + 3 * 5; 

console.log("Resultado da expressão 2 + 3 * 5: " + resultado); 

// A multiplicação é feita primeiro por causa da ordem de precedência dos operadores. 

// Ou seja, 3 * 5 = 15, depois 2 + 15 = 17 
 
let totalPares = 0
let totalImpares = 0

for(let i = 0; i <= 100; i++){
    if (i % 2 == 0){
        totalPares++
    }else{
        totalImpares ++
    }
}
console.log('total de pares = ', totalPares)
console.log('total de impares = ', totalImpares)

// 1. Contador de 1 a 10 

for (let i = 1; i <= 10; i++) { 

console.log(i); 

} 

 

// 2. Soma de 1 a 100 

let soma = 0; 

for (let i = 1; i <= 100; i++) { 

soma += i; 

} 

console.log("Soma de 1 a 100: " + soma); 

 

// 3. Tabuada personalizada 

let numeroTabuada = 7; 

for (let i = 1; i <= 10; i++) { 

console.log(numeroTabuada + " x " + i + " = " + (numeroTabuada * i)); 

} 

 

// 4. Contagem regressiva com while 

let contagem = 10; 

while (contagem >= 0) { 

console.log(contagem); 

contagem--; 

} 

console.log("Contagem finalizada!"); 

 

// 5. Receber números até digitar 0 (simulado com array) 

let entradas = [5, 10, 3, 0]; 

let contador = 0; 

let index = 0; 

do { 

if (entradas[index] !== 0) { 

contador++; 

} 

index++; 

} while (entradas[index - 1] !== 0); 

console.log("Total de números digitados: " + contador); 

 

// 6. Jogo do número secreto 

let numeroSecreto = 7; 

let tentativas = [3, 5, 7]; 

for (let i = 0; i < 3; i++) { 

if (tentativas[i] === numeroSecreto) { 

console.log("Acertou!"); 

break; 

} else { 

console.log("Tente novamente."); 

} 

} 

 

// 7. Idade ao longo dos anos 

let nascimento = 2000; 

let atual = 2025; 

for (let ano = nascimento; ano <= atual; ano++) { 

console.log("Em " + ano + " você tinha " + (ano - nascimento) + " anos."); 

} 

 

// 8. Listando números pares entre 1 e 50 

for (let i = 1; i <= 50; i++) { 

if (i % 2 === 0) { 

console.log(i); 

} 

} 

 

// 9. Contar múltiplos de 3 entre 1 e 100 

let multiplosDe3 = 0; 

for (let i = 1; i <= 100; i++) { 

if (i % 3 === 0) { 

multiplosDe3++; 

} 

} 

console.log("Números entre 1 e 100 divisíveis por 3: " + multiplosDe3); 

 

// 10. Menu com repetição 

let opcoes = [1, 2, 3]; 

let indice = 0; 

let opcao; 

do { 

opcao = opcoes[indice]; 

if (opcao === 1) { 

console.log("Ver saldo"); 

} else if (opcao === 2) { 

console.log("Fazer depósito"); 

} else if (opcao === 3) { 

console.log("Sair"); 

} 

indice++; 

} while (opcao !== 3); 

 