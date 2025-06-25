const prompt = require('prompt-sync')();
let frutas

const a = [];

for(let i = 0; i < 5; i++){
 frutas = prompt('Digite sua fruta: ')
 a.push(frutas)
}
console.log(a)