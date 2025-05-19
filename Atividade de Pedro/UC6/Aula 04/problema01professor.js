const prompt = require('prompt-sync')();
const nome = prompt('Informe seu Nome: ')
const idade = Number (prompt('Informe sua Idade: '))

if(idade<12){
    console.log(`Nome do usuario: ${nome}
        Faixa Etaria: Criança`)
} else if(idade<=17){
    console.log(`Nome do usuario: ${nome}
        Faixa Etaria: Adolecente`)
}else if(idade<=59){
console.log(`Nome do usuario: ${nome}
        Faixa Etaria: Adulto`)
}else{
    console.log(`Nome do usuario: ${nome}
        Faixa Etaria: Idoso`)
}