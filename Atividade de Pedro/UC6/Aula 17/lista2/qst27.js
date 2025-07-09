const prompt = require('prompt-sync')();
const numero = parseInt(prompt('Digite seu numero: '))

if(numero === 0){
    console.log(`O número ${numero} é igual a 0.`)
}else if(numero < 0){
    console.log(`O número ${numero} é negativo.`)
}else if(numero > 0){
    console.log(`O número ${numero} é positivo.`) 
}