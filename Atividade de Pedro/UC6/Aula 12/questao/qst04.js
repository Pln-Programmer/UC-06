const prompt = require('prompt-sync')();
let numeros

const a = [];

for(let i = 0; i < 10; i++){
 numeros = prompt(`Digite sua ${i+1}º numero: `)
 a.push(numeros)
 a.sort((a,b) => a-b)
}console.log(`O numero ${a[9]} é o maior numero`)