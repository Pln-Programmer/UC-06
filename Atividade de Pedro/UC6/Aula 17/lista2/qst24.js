const prompt = require('prompt-sync')();
const numero = parseInt(prompt('Digite sua numero: '))

if(numero % 2 === 0 && numero > 0){
    console.log(`O número ${numero} é par e positivo`)
}else if(numero % 2 === 0 && numero < 0){
    console.log(`O número ${numero} é par e negativo`)
}else if(numero > 0){
    console.log(`O número ${numero} é impar e positivo`)
}else if(numero < 0){
    console.log(`O número ${numero} é impar e negativo`)
}
