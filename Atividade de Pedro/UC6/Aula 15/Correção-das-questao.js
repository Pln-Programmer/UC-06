// 19.
// const prompt = require('prompt-sync')();
// let numeros
// let poui = []
// let par = []
// let soma = 0

// for (let i = 1; i <= 6; i++){
//     numeros = Number(prompt("digite um numero: "))
//     poui.push(numeros)
// }
// for(let j = 0; j<poui.length; j++){
//     if(poui[j] % 2 === 0){
//         par.push(poui[j])
//     }else{
//         soma+= poui[j]
//     }
// }
// console.log(`Quantidade de números pares: ${par.length}
//    Soma dos números Ímpares: ${soma} `)


// 20.
const prompt = require('prompt-sync')();
const nome1 = prompt('Digite o  nome:')
const idade1 = Number(prompt('Digite a idade:'))
const nome2 = prompt('Digite o  nome:')
const idade2 = Number(prompt('Digite a idade:'))
const nome3 = prompt('Digite o  nome:')
const idade3 = Number(prompt('Digite a idade:'))
const nome4 = prompt('Digite o  nome:')
const idade4 = Number(prompt('Digite a idade:'))
const nome5 = prompt('Digite o  nome:')
const idade5 = Number(prompt('Digite a idade:'))

if(idade1 >= 18){
    console.log(`${nome1} é maior de idade`)
}
if(idade2 >= 18){
    console.log(`${nome2} é maior de idade`)
}
if(idade3 >= 18){
    console.log(`${nome3} é maior de idade`)
}
if(idade4 >= 18){
    console.log(`${nome4} é maior de idade`)
}
if(idade5 >= 18){
    console.log(`${nome5} é maior de idade`)
}


// 20. Resolução certa
// const prompt = require('prompt-sync')();
// let nomes = []
// let idades = []
// let idade, nome;

// for(let i = 0; i<5; i++){
//     nome = prompt('Digite o nome: ');
//     nomes.push(nome)
//     idade = parseInt(prompt('Digite sua idade: '));
//     idades.push(idade)
// }
// console.table(nomes)
// console.table(idades)
// console.log("Pessoas Maiores de Idade")
// for(let j = 0; j < nomes.length; j++){
//     if(idade[j] >= 18){
//         console.log(nomes[j])
//     }
// }