const prompt = require('prompt-sync')();
const numero = Number(prompt('Digite uma numero: '))

if(numero % 3 === 0 && numero % 7 === 0){
    console.log(`O número ${numero} é divisível por 3 e 7`);
}