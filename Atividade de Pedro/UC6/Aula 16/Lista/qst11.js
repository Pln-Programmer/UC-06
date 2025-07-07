const prompt = require('prompt-sync')();
const temperatura = Number(prompt('Digite a temperatura: '))

if(temperatura > 30){
    console.log(`Com a temperatura de ${temperatura}, o local onde você se encontra está muito quente.`);  
}else if(temperatura >= 20){
    console.log(`Com a temperatura de ${temperatura}, o local onde você se encontra em um clima tranquilo.`);  
}else{
     console.log(`Com a temperatura de ${temperatura}, o local onde você se encontra está muito frio.`);  
}