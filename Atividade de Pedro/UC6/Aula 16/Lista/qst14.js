const prompt = require('prompt-sync')();
const numero = Number(prompt('Digite seu numero: '))

if(numero === 0){
    console.log(`O numero ${numero} é zero`);
}