const prompt = require('prompt-sync')();
const nota = Number(prompt('Digite sua nota: '))

if(nota >= 7 && nota <=10){
    console.log(`Com a nota ${nota} você está aprovado`)
}else if(nota >= 5 && nota < 7){
    console.log(`Com a nota ${nota} você está em recuperação`)
}else if(nota < 5 && nota > 0){
    console.log(`Com a nota ${nota} você está reprovado`)
}else{
    console.log(`Erro! nota invalida.`)
}