const prompt = require('prompt-sync')();
let total = 0

for(let i = 1; i <= 5;i++){
    let idade = Number(prompt('Digite a idade da pessoa: '))
if(idade >= 18){
total++

}
}
console.log(`O total de pessoas com mais de 18 anos é ${total}`)