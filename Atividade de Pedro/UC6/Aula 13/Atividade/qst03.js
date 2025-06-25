// // Problema 3 – Calcular Média de 3 Notas
// Crie uma função que receba 3 notas e retorne a média. Utilize prompt-sync para capturar as notas.
const prompt = require('prompt-sync')();
let pergunta
let notas = []
let soma = 0

function calculo(){
    for(let i = 0; i < 3; i++){
    pergunta = Number(prompt(`Digite a ${i+1}º nota: `))
    notas.push(pergunta)
    }
    for(let j = 0; j < notas.length; j++){
        soma += notas[j]
    }
    console.log(`A média das notas ${notas} é ${(soma / 3).toFixed(2)}`)
}
calculo()