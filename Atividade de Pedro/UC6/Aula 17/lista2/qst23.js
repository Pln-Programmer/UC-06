const prompt = require('prompt-sync')();
const idade = parseInt(prompt('Digite seu idade: '))

if(idade <= 12 && idade >= 0){
    console.log(`Com ${idade} você é uma criança.`)
}else if(idade > 12 && idade < 18){
    console.log(`Com ${idade} você é um adolecente.`)
}else if(idade >=18 && idade < 60){
        console.log(`Com ${idade} você é um adulto.`)
}else if(idade >= 60){
        console.log(`Com ${idade} você é um idoso.`)
}else{
    console.log(`Erro! Idade invalida!`)
}