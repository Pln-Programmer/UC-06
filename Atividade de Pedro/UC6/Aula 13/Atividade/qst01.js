// Problema 1 – Tabuada com Função
// Crie uma função que receba um número e exiba sua tabuada de 1 a 10.
let total = tabuada(5)

function tabuada(x) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} + ${x} = ${i + x}`)
        
    }
console.log('---------------------')
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} - ${x} = ${i - x}`)
        
    }
console.log('---------------------')
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${x} = ${i * x}`)
        
    }
console.log('---------------------')
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} / ${x} = ${i / x}`)
        
    }

}