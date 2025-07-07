const prompt = require('prompt-sync')();
const numero = Number(prompt('Digite seu numero: '))

if(numero % 5 === 0){
    console.log(`O número ${numero} é multiplo de 5`);
}else{
        console.log(`O número ${numero} não é multiplo de 5`);
}