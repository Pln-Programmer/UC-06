const prompt = require('prompt-sync')();
const numero = Number(prompt('Digite seu numero: '))

if(numero > 18 && numero < 60){
    console.log(`O numero ${numero} está entre 18 e 60.`);
}else{
     console.log(`O numero ${numero} não está entre 18 e 60.`);
}