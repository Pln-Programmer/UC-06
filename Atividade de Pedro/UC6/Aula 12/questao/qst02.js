const prompt = require('prompt-sync')();
let numeros
let soma = 0

let a = [];

for (let i = 0; i < 5; i++) {
    numeros = Number(prompt(`Digite o ${i + 1}º numero: `))
    a.push(numeros)
    soma += a[i]
    
} console.log(soma)
