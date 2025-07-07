const prompt = require('prompt-sync')();
const idade = Number(prompt('Digite sua idade: '))

if(idade >= 18){
    console.log(`Com ${idade} anos, você é maior de idade!`);
}else{
        console.log(`Com ${idade} anos, você não é maior de idade!`);
}