const prompt = require('prompt-sync')();
const nota = Number (prompt ('Digite a sua Nota: '))

if(nota < 5){
    console.log (`Com a nota ${nota} você está Reprovado`)
}
if(nota >= 5 && nota < 7){
    console.log (`Com a nota ${nota} você está de Recuperação`)
} if(nota >= 7){
    console.log (`Com a nota ${nota} você está Aprovado`)
}
    