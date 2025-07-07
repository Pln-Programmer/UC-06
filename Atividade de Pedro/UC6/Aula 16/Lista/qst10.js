const prompt = require('prompt-sync')();
const senha = Number(prompt('Digite sua senha: '))

if(senha !== 1234){
    console.log('Senha Incorreta!');
} else{
    console.log('Senha Correta! Seja bem vindo!');
}