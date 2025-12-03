// setTimeout

function saudacao (){
    console.log('Suave fera?')
}

setTimeout(saudacao, 2000) //milisegundos

let contador = 0

const id = setInterval(() => { //o id e retornado pelo setInterval
    contador++
    console.log('tempo descorrido', contador)
    if(contador == 10)
        clearInterval(id) //Encerra a execucao pelo id
}, 1000)