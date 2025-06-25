const prompt = require('prompt-sync')();
const numero = Number(prompt('Quantas notas deseja calcular: '))
let nota
let media = 0
let media2 = 0

let a = [];

for(let i = 0; i < numero; i++){
nota = Number(prompt(`Digite a ${i+1}º nota: `))
a.push(nota)
media += a[i]

}media2 = media / numero
console.log(`A média é de ${media2}`)