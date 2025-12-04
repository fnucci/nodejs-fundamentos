import{ createInterface } from 'readline'
import{somar, subtrair, multiplicar, dividir } from './calculadora.js'

const leitor = createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Digite o primeiro numero:\n>', (primeiro)=> {
    leitor.question('Digite a operacao: (+, -, *, /)\n>', (operacao)=> {
        leitor.question('Digite o segundo numero:\n>', (segundo)=> {
            
            const num1 = Number(primeiro)
            const num2 = Number(segundo)
            
            let resultado = null

            switch(operacao){
                case '+':
                    resultado = somar(num1, num2)
                    break
                case '-':
                    resultado = subtrair(num1, num2)
                    break
                case '*':
                    resultado = multiplicar(num1, num2)
                    break
                case '/':
                    resultado = dividir(num1, num2)
                    break
                default:
                    console.log('Operacao invalida')
                    break;
            }

            console.log(resultado)
            leitor.close()
        })
    })
})

