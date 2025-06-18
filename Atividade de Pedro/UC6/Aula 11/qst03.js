let numeros = [3,7,1,18,10];
let maiornumero = numeros[0]
let smaior = numeros[0]

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > maiornumero){
        smaior = maiornumero;
        maiornumero = numeros[i]
    }else if(numeros[i] > smaior && numeros[i] < maiornumero){
        smaior = numeros[i];
    }
}
console.log(`${smaior} e ${maiornumero}`)