const prompt = require('prompt-sync')();
let numero = 0

do {
    numero = Number(prompt('Digite a sua senha: '))
    if(numero === 1234){
 console.log (`Senha Correta, Seja Bem Vindo!!!`)
    }else{
        console.log(`Senha incorreta. Tente Novamnete.`)
    }
} while (numero !== 1234);