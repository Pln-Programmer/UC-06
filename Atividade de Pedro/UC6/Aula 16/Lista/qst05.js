const prompt = require('prompt-sync')();
const palavra1 = prompt('Digite a primeira palavra: ')
const palavra2 = prompt('Digite a primeira palavra: ')

if(palavra1 === palavra2){
    console.log(`As duas palavras são iguais!`);
}else{
    console.log(`As duas palavras são diferentes!`);
    
}