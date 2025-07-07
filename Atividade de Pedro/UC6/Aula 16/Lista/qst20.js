const prompt = require('prompt-sync')();
const numero = Number(prompt('Digite seu numero: '))

if(numero > 0 && numero < 10){
    console.log(`O numero ${numero} está entre 0 e 10.`);
}else{
     console.log(`O numero ${numero} não está entre 0 e 10.`);
}