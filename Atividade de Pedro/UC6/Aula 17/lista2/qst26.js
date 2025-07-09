const prompt = require('prompt-sync')();
const numero = parseInt(prompt('Digite seu numero: '))

if(numero === 1){
    console.log(`Muito Facil`)
}else if(numero === 2){
    console.log(`Facil`)
}else if(numero === 3){
    console.log(`Médio`)
}else if(numero === 4){
    console.log(`Difícil`)
}else if(numero === 5){
    console.log(`Muito Difício`)
}else{
    console.log(`Erro!`)
}