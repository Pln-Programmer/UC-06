const prompt = require('prompt-sync')();
const idade = Number(prompt('Digite sua idade: '))
const a = prompt('Você é alfabetizado (Digite "s" para sim e "n" para não)? ')

if(idade >= 18 && a.toUpperCase() === "S"){
    console.log('Você é maior de idade e alfabetizado, então pode sim tirar sua carteira de motorista.')
}else if(idade >= 18 && a.toUpperCase() === "N"){
    console.log('Você é maior de idade, mas não é alfabetizado, então não pode tirar sua carteira de motorista.')
}else if(idade < 18 && a.toUpperCase() === "S"){
    console.log('Você é alfabetizado, mas é menor de idade, então não pode tirar sua carteira de motorista.')
}else if(idade < 18 && a.toUpperCase() === "N"){
    console.log('Você é menor de idade e não é alfabetizado, então não pode tirar sua carteira de motorista.')
}