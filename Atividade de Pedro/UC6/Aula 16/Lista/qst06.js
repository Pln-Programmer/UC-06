const prompt = require('prompt-sync')();
const numero = Number(prompt('Digite seu numero: '))

if(numero > 10 && numero < 100){
    console.log(`O numero ${numero} está entre 10 e 100.`);
}else{
     console.log(`O numero ${numero} não está entre 10 e 100.`);
}