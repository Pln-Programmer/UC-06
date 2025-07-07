const prompt = require('prompt-sync')();
const ano = Number(prompt('Digite o ano: '))

if(ano % 4 === 0 || ano % 100 === 0 || ano % 400 === 0){
    console.log(`O ano ${ano} é um ano bissexto`);
}