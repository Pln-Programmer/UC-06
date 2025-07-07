const prompt = require('prompt-sync')();
const idade = Number(prompt('Digite sua idade: '))

if(idade >= 18){
    console.log('Com essa idade você ja tem a permissão de realizar o voto!');
}
else if(idade >= 16 && idade < 18){
    console.log(`Você pode realizar o voto, mas não será obrigatorio.`);
}
else{
     console.log('Com essa idade você não tem permissão de realizar o voto!');
}