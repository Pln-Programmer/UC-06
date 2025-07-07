const prompt = require('prompt-sync')();
const numero1 = Number(prompt('Digite o primerio número: '))
const numero2 = Number(prompt('Digite o segundo número: '))

if(numero1 > numero2){
    console.log(`o numero ${numero1} é maior que ${numero2}`);
    
}else if(numero2 > numero1){
    console.log(`o numero ${numero2} é maior que ${numero1}`);

}