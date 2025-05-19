const prompt = require('prompt-sync')();
const nome = prompt('Informe o seu Nome: ');
const preco = Number(prompt('Qual o preço do produto: '));

if (preco < 1) {
    console.log(`Erro! Senhor(a) ${nome}, o valor informado é inválido.`);
} else if (preco >= 1 && preco < 100) {
    console.log(`Senhor(a) ${nome}, o valor de R$${preco} não terá desconto.`);
} else if (preco <= 300) {
    let desconto1 = preco * 0.95;
    console.log(`Senhor(a) ${nome}, o valor de R$${preco} teve um desconto de 5% e ficou R$${desconto1.toFixed(2)}`);
} else if (preco < 500) {
    let desconto2 = preco * 0.90;
    console.log(`Senhor(a) ${nome}, o valor de R$${preco} teve um desconto de 10% e ficou R$${desconto2.toFixed(2)}`);
} else {
    let desconto3 = preco * 0.85;
    console.log(`Senhor(a) ${nome}, o valor de R$${preco} teve um desconto de 15% e ficou R$${desconto3.toFixed(2)}`);
}
