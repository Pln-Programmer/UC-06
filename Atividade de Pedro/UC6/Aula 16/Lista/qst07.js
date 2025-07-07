const prompt = require('prompt-sync')();
const nota1 = parseInt(prompt('Digite a primeira nota: '))
const nota2 = parseInt(prompt('Digite a segunda nota: '))
const nota3 = parseInt(prompt('Digite a terceira nota: '))

if(nota1 <= 10 && nota1 >= 0 &&
nota2 <= 10 && nota2 >= 0 &&
nota3 <= 10 && nota3 >= 0){

let media = (nota1 + nota2 + nota3) / 3
console.log(media)
}