let numero = [-4, 3, 0, -1, 10, 7];

for(let i = 0; i < numero.length; i++){
    // positivo e par
    if(numero[i]>0 && numero[i] % 2 === 0){
        console.log(`O numero ${numero[i]} é positivo e par`);
        // positivo e impar
    }else if(numero[i]>0 && numero[i] % 2 !== 0){
        console.log(`O numero ${numero[i]} é positivo e impar`);
        // negativo e par
    }else if(numero[i]<0 && numero[i] % 2 === 0){
        console.log(`O numero ${numero[i]} é negativo e par`);
        // negativo e impar
    }else if(numero[i]<0 && numero[i] % 2 !== 0){
        console.log(`O numero ${numero[i]} é negativo e impar`);
        
    }
}