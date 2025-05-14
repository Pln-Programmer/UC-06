const prompt = require('prompt-sync')();
const numero1 = Number(prompt('Digite um numero:'));
const numero2 = Number(prompt('Digite um numero:'));

if (numero1 > numero2){
    console.log (`${numero1} é maior que o ${numero2}`)
}else{
    console.log (`${numero2} é maior que o ${numero1}`)
}