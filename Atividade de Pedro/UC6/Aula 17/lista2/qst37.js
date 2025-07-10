const prompt = require('prompt-sync')();
const nota1 = Number(prompt('Digite a primeira nota: '))
const nota2 = Number(prompt('Digite a segunda nota: '))
const frenquencia = Number(prompt('Digite sua frequência em porcentagem: '))

let calculo = nota1 + nota2 / 2

if(calculo >= 7 && frenquencia >= 75 && calculo <= 10 && frenquencia <= 100){
console.log(`Você está aprovado!`)
}else{
console.log(`Você está reprovado!`)
}