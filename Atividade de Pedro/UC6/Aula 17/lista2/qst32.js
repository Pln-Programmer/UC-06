const prompt = require('prompt-sync')();
const valor = Number(prompt('Digite o valor da conta: '))

if (valor <= 100) {
    let a = valor * 0.95
console.log(`O valor de ${valor} foi aplicado um desconto de 5%, então no total ficou ${a}`)
} else if (valor <= 500) {
    let b = valor * 0.90
console.log(`O valor de ${valor} foi aplicado um desconto de 10%, então no total ficou ${b}`)
} else if (valor > 500) {
    let c = valor * 0.85
console.log(`O valor de ${valor} foi aplicado um desconto de 15%, então no total ficou ${c}`)
}else{
    console.log(`Erro! Valor invalido.`)
}