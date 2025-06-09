let numeros = [5,8,7.5,9,6,10];

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] >= 7){
        console.log(`Você tirou ${numeros[i]}, então você passou! Parabens!!`)
    }else {
        console.log(`Você tirou ${numeros[i]}, então infelizmente você não passou! Boa Sorte!!`)
    }
}