const prompt = require('prompt-sync')();
const loja = prompt('Digite a loja (A/B/C): ')
const valor = Number(prompt('Digite o valor: '))
let calculo = 0
let calculo2 = 0

if (loja.toUpperCase === "A") {
    calculo = valor * 10 / 100
    calculo2 = calculo + valor
    console.log(`Foi adicionado 10% no valor de ${valor}, ficando ${calculo2}`);
} else if (loja.toUpperCase === "B") {
    calculo = valor * 20 / 100
    calculo2 = calculo + valor
    console.log(`Foi adicionado 20% no valor de ${valor}, ficando ${calculo2}`);
} else if (loja.toUpperCase === "C") {
    calculo = valor * 30 / 100
    calculo2 = calculo + valor
    console.log(`Foi adicionado 30% no valor de ${valor}, ficando ${calculo2}`);
}