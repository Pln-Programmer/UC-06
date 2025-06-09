const prompt = require('prompt-sync')();
const numero = Number(prompt('Digite seu numero: '))

if(numero % numero === 0 && numero % 7 !== 0){
    console.log(`O numero ${numero} é primo`)
}else{
    console.log(`O numero ${numero} não é primo`)
}
