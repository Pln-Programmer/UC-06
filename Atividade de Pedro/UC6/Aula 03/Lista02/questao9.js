const prompt = require ('prompt-sync')();
const nota1 = Number (prompt('Digite sua nota: '))
const nota2 = Number (prompt('Digite sua nota: '))

let nota3 = (nota1 + nota2) / 2

if(nota3 >= 6){
    console.log (`Nota ${nota3} está na média, Parabéns`)
}else{
    console.log (`Nota ${nota3} está abaixo da média, Estude mais proximo ano`)
}
