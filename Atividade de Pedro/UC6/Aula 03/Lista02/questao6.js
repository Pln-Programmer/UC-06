const prompt = require ('prompt-sync')();
const numero = Number (prompt('Digite seu numero: '))

if(numero % 3 === 0){
    console.log (`${numero} é multiplo de 3`)
}else{
    console.log (`${numero} não é multiplo de 3`)
}