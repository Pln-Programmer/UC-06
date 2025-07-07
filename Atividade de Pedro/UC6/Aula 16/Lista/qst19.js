const prompt = require('prompt-sync')();
const numero1 = Number(prompt('Digite o primerio número: '))
const numero2 = Number(prompt('Digite o segundo número: '))

if(numero1 === numero2 && numero1 > 10 && numero2 > 10){
    console.log(`Os numero ${numero1} são iguais e maiores que 10`);
}