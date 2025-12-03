for(let i = 0; i < 10; i++){
    console.log('o numero é: ', i)
}

const palavra = 'libertadores'

for(let i = 0; i < palavra.length; i++){
    console.log('o caractere e: ', palavra[i])
}

let i = 0
while(i < 10){
    console.log('o numero é: ', i)
    i++
}

let x = 0
do{
    console.log('o numero é: ', x)
    x++
} while (x < 10)

const textao = "exemplo de foreach em palavras";

for (const caractere of textao) {
  console.log(caractere);
}


for (let i = 0, j = 10; i < j; i++, j--) { 

console.log(`i: ${i}, j: ${j}`); 

} 

// Resultado: 

// i: 0, j: 10 

// i: 1, j: 9 

// i: 2, j: 8 

// i: 3, j: 7 

// i: 4, j: 6 


let k = 0; 

for (; k < 5; k++) { 

console.log(k); 

} 

// Resultado: 0, 1, 2, 3, 4 


let l = 0; 

for (;; l++) { 

if (l >= 5) break; 

console.log(l); 

} 

// Resultado: 0, 1, 2, 3, 4 


for (let m = 0; m < 5;) { 

console.log(m); 

m++; 

} 

// Resultado: 0, 1, 2, 3, 4 