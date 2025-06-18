let numeros = [27, 64, 89, 53, 72, 31, 46, 98, 59, 77];

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > 50){
        console.log(`O número ${numeros[i]} na posição ${i} é maior que 50.`);
    }else{
        console.log(`O número ${numeros[i]} não é maior que 50.`);
        
    }
}