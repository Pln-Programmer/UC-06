const prompt = require('prompt-sync')();
const z = Number(prompt('Digite seu numero:'))
const y = Number(prompt('Digite seu numero:'))

if (!isNaN(z) && !isNaN(y)) {
    const calculo = (prompt('Digite + para soma, - para subtração, x para multiplicação e / para divisão: '))
    switch (calculo){
        case "+":
            let soma = z + y
            console.log(`${soma}`)
            break;
        case "-":
            let subtracao = z - y
            console.log(`${subtracao}`)
            break;
        case "x":
            let multiplicacao = z * y
            console.log(`${multiplicacao}`)
            break;
        case "/":
        let divisao = z / y
            console.log(`${divisao}`)
            break;
    }
} else{
    console.log(`Erro!!`)
}