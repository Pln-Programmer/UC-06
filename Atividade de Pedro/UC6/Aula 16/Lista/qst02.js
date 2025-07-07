const prompt = require('prompt-sync')();
const numero = Number(prompt('Digite seu numero: '))

if(numero % 2 === 0){
console.log(`O numero ${numero} é par`)
}