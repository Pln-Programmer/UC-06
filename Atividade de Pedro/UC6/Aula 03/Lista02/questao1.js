const prompt = require('prompt-sync')();
const numero = Number(prompt("Digite um numero: "))

if(numero >= 0){
    console.log (`${numero} é positivo`)
}else{
    console.log (`${numero} é negativo`)
}