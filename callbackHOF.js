// Higher order function == função que recebe outra função como parâmetro

function calcular (a, b, operation) {

    return operation(a, b)

}

function soma(a, b){
    return a + b
}

function subtracao(a, b){
    return a - b
}

function multiplicacao(a, b){
    return a * b
}

function divisao(a, b){
    return a / b
}

console.log(calcular(10, 5, soma)) //callback
console.log(calcular(10, 5, subtracao)) //callback
console.log(calcular(10, 5, multiplicacao)) //callback
console.log(calcular(10, 5, divisao)) //callback