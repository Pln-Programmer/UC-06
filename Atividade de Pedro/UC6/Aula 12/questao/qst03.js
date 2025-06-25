const prompt = require('prompt-sync')();
let nome
let conf

let a = [];

for(let i = 0; i < 4; i++){
    nome = prompt(`${i+1}º nome: `)
    a.push(nome)
    
}
conf = prompt(`qual nome você quer confirmar? `)

let index = a.indexOf(conf)
if(a.indexOf(conf) === -1){
console.log('Esse nome não existe!');
}else{
    console.log(`O nome: ${a[index]} existe!`);
    
}
