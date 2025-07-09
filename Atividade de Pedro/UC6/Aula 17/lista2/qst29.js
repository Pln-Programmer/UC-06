const prompt = require('prompt-sync')();
const numero = Number(prompt('Digite seu numero: '))

if(numero <= 30){
    console.log(`O número ${numero} é baixo`)
}else if(numero > 30 && numero <= 70){
    console.log(`O número ${numero} é médio`)
}
else if(numero > 70){
        console.log(`O número ${numero} é alto`)
}