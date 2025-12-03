const numeros = [1,2,3,4,5,6,7,8,9]

const filtrados = numeros.filter((numero) => {
    return numero %2 == 0
})

console.log('Todos os numeros: ', numeros)
console.log('Numeros filtrados: ', filtrados)

const mapa = numeros.map((numero) => {
    return numero * 2
})

console.log('Mapa de numeros: ', mapa)


let numerosSet = new Set(); 

numerosSet.add(1); 

numerosSet.add(2); 

numerosSet.add(2); // Não será adicionado novamente 

console.log(numerosSet); // Resultado: Set { 1, 2 } 


let arrayComDuplicatas = [1, 1, 2, 2, 3, 4, 4]; 

let arraySemDuplicatas = [...new Set(arrayComDuplicatas)]; 
console.log(arrayComDuplicatas);
console.log(arraySemDuplicatas); // Resultado: [1, 2, 3, 4] 

let nomeMap = new Map(); 

nomeMap.set('nome', 'João'); 

nomeMap.set('idade', 25); 

console.log(nomeMap.get('nome')); // Resultado: João 

console.log(nomeMap.get('idade')); // Resultado: 25 


let chaveFuncao = function() {}; 

let chaveObjeto = {}; 

let mapaVariado = new Map(); 

mapaVariado.set(chaveFuncao, 'Valor para função'); 

mapaVariado.set(chaveObjeto, 'Valor para objeto'); 

console.log(mapaVariado.get(chaveFuncao)); // Resultado: Valor para função 

console.log(mapaVariado.get(chaveObjeto)); // Resultado: Valor para objeto 