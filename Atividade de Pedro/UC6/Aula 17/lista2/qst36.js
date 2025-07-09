const prompt = require('prompt-sync')();
const temperatura = Number(prompt('Digite a temperatura: '))

if(temperatura <= 15){
console.log(`Com a temperatura em ${temperatura}°C está frio`)
}else if(temperatura > 15 && temperatura <= 25){
    console.log(`Com a temperatura em ${temperatura}°C está agradável`)
}else if(temperatura > 25 && temperatura <= 35){
    console.log(`Com a temperatura em ${temperatura}°C está quente`)
}else if(temperatura > 35){
    console.log(`Com a temperatura em ${temperatura}°C está muito quente`)
}