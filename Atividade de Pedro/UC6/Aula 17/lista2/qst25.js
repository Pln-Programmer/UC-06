const prompt = require('prompt-sync')();
const peso = Number(prompt('Digite seu peso(kg): '))
const altura = Number(prompt('Digite sua altura(m): '))

let calculo = peso / (altura * altura)

if(calculo < 18.5 && calculo > 0){
    console.log(`Com o peso de ${peso} e a altura ${altura} você está baixo do peso`)
}else if(calculo >= 18.5 && calculo <= 24.9){
    console.log(`Com o peso de ${peso} e a altura ${altura} você está com um peso normal`)
}else if(calculo >= 25 && calculo <= 29.9){
    console.log(`Com o peso de ${peso} e a altura ${altura} você está com sobrepeso`)
}else if(calculo >= 30){
    console.log(`Com o peso de ${peso} e a altura ${altura} você está obeso`)
}else{
    console.log(`Erro!`)
}