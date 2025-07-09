const prompt = require('prompt-sync')();
const nota = Number(prompt('Digite sua nota: '))

if (nota >= 0 && nota <= 4) {
    console.log(`A nota ${nota} é ruim`)
} else if (nota > 4 && nota <= 6) {
    console.log(`A nota ${nota} é regular`)
} else if (nota === 7 || nota === 8) {
    console.log(`A nota ${nota} é bom`)
} else if (nota === 9 || nota === 10) {
    console.log(`A nota ${nota} é otimo`)
}