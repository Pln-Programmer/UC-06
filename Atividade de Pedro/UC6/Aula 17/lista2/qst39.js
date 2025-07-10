const prompt = require('prompt-sync')();
const numero = Number(prompt('Digite seu número: '))

if(numero % 2 === 0 && numero % 3 === 0){
console.log(`O número ${numero} é multiplo de 2 e 3.`)
}else if(numero % 3 === 0){
    console.log(`O número ${numero} é multiplo de 2.`)
}else if(numero % 2 === 0){
    console.log(`O número ${numero} é multiplo de 3.`)
}else{
console.log(`O número ${numero} não é multiplo nem por 2, nem por 3.`);
}