const prompt = require('prompt-sync')();
const idade = Number(prompt ('digite dua idade:'))

if (idade >= 16){
    console.log (`você está liberado`)
} else {
    console.log (`você não esta liberado`)
}
