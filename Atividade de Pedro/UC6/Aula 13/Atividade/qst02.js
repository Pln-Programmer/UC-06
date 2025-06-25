// Problema 2 – Verificar Par ou Ímpar
// Crie uma função que receba um número e diga se ele é par ou ímpa.

let numero = parouimpar(10)

function parouimpar(x){
    if(x % 2 === 0){
        console.log(`O número ${x} é par`)
    }else{
        console.log(`O número ${x} é impar`)
    }
}