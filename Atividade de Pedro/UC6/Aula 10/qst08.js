// Chat GPT:
const prompt = require('prompt-sync')();

// let nome;

// do {
//     nome = prompt('Digite um nome, ou digite "sair" para encerrar: ');

//     if (nome.toLowerCase() === "sair") {
//         break;
//     }

//     if (nome.length >= 10) {
//         console.log("Erro! Nome muito grande.");
//     } else {
//         console.log(`Nome válido: ${nome}`);
//     }

// } while (true);

let nome;

do {
    nome = prompt('Digite um nome, ou digite "sair" para encerrar: ');
    if(nome.length >= 10){
console.log(`Erro! Nome muito grande`);}
} while (nome !== "sair");