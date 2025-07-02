const prompt = require('prompt-sync')();
let numeros
let somapares = 0
let soma10 = 0
let numero = []
let pares = []

for (let i = 1; i < 6; i++) {
    numeros = parseInt(prompt('Digite seu numero: '))
    numero.push(numeros)
}
for (let j = 0; j < numero.length; j++) {
    if (numero[j] % 2 === 0) {
        pares.push(numero[j])
        somapares += numero[j]
    }
    if (numero[j] >= 10) {
        soma10 += numero[j]
    }
}
console.log(`Soma dos números maiores que 10: ${soma10}
Média dos números pares: ${somapares / pares.length}`)