const prompt = require('prompt-sync')();
const palavra = prompt('Digite uma palavra: ')

if(palavra === ""){
    console.log('A resposta está em branco');
}else{
    console.log(palavra);
}