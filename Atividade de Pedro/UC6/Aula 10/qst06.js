const prompt = require("prompt-sync")();
const numero = Number(prompt('Digite um numero, que irei mostrar a tabuada dele (1 a 10): '))

for(let i = 1; i <= 10; i++){
    
    if(numero*i % 10 === 0){
console.log(`${i} x ${numero} = ${numero * i} é multiplo de 10`)
    }else{
        console.log(`${i} x ${numero} = ${numero * i}`)
    }
}