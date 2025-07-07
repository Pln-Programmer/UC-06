const prompt = require('prompt-sync')();
const letra = prompt('Digite uma letra: ')

if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u" ||
    letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U"
){
    console.log(`A letra ${letra} é uma vogal.`);
}else{
    console.log(`A letra ${letra} não é uma vogal.`);
}