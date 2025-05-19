const prompt = require('prompt-sync')();
const nome = prompt('Informe seu Nome: ')
const nota = Number (prompt('Informe sua Nota: '))

if(nota<5){
    console.log(`Nome do usuario: ${nome}
Nota: D, você está reprovado!!`)
} else if(nota<=6.9){
    console.log(`Nome do usuario: ${nome}
Nota: C, você está na média.`)
}else if(nota<=8.9){
console.log(`Nome do usuario: ${nome}
Nota: B, você está na média, está quase lá!`)
}else if(nota>=10){
    console.log(`Nome do usuario: ${nome}
Nota: A, Excelente Desempenho!`)
}