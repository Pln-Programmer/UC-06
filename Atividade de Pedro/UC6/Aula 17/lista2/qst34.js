const prompt = require('prompt-sync')();
const idade = Number(prompt('Digite sua idade: '))
const peso = Number(prompt('Digite seu peso(kg): '))

if(idade >= 16 && idade <= 69 && peso >= 50){
console.log(`Você está dentro das normas, ent pode doar`)
}else{
console.log(`Você não tem permissão para doar`)
}