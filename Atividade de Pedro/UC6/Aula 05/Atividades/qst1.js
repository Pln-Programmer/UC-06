const prompt = require('prompt-sync')();
const numero = parseInt(prompt('Digite o seu numero entre 0 e 8: '));

switch (numero) {
    case 1:
        console.log(`O numero apresentado representa o dia da semana, Domingo`)
        break;
    case 2:
        console.log(`O numero apresentado representa o dia da semana, Segunda-Feira`)
        break;
    case 3:
        console.log(`O numero apresentado representa o dia da semana, Terça-Feira`)
        break;
    case 4:
        console.log(`O numero apresentado representa o dia da semana, Quarta-Feira`)
        break;
    case 5:
        console.log(`O numero apresentado representa o dia da semana, Quinta-Feira`)
        break;
    case 6:
        console.log(`O numero apresentado representa o dia da semana, Sexta-Feira`)
        break;
    case 7:
        console.log(`O numero apresentado representa o dia da semana, Sabado`)
        break;
    default:
        console.log(`Erro, o numero apresentado não está entre os que foi pedido.`)
}