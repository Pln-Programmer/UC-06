const prompt = require('prompt-sync')();
const turno = prompt('Digite seu turno: ')

if(turno.toUpperCase === "M"){
    console.log('Você está no turno matutino!');
}else if(turno.toUpperCase === "V"){
    console.log("Você está no turno vespertino");
}else if(turno.toUpperCase === "N"){
    console.log("Você está no turno noturno");
}else{
    console.log('Turno invalido');
}