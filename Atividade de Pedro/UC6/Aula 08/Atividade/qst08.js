const prompt = require('prompt-sync')();
const numero = Number(prompt('Digite um número: '));

let divisores = 0;

for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        divisores++;
    }
}

if (divisores > 2) {
    console.log('Não é primo');
} else {
    console.log('É primo');
}
