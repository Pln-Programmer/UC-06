const prompt = require('prompt-sync')();
const idade = parseInt(prompt('Digite seu idade: '))

if(idade <= 12 && idade >= 0){
    console.log(`Com ${idade} você é infantil.`)
}else if(idade > 12 && idade < 18){
    console.log(`Com ${idade} você é juvanil.`)
}else if(idade >=18 && idade < 60){
        console.log(`Com ${idade} você é adulto.`)
}else if(idade >= 60){
        console.log(`Com ${idade} você é sênior.`)
}else{
    console.log(`Erro! Idade invalida!`)
}