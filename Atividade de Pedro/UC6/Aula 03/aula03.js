// Nessa aula iremos trbalhar com as estruturas condicionais simples.


// Estrutura condicional simples:

/*
if(condição){
    bloco de instruções
}

operadores relacionas: (<,>,>=,<=,!== )
*/
const idade = 92237;

if(idade >= 90){
    console.log (`Eu sou um velho e tenho ${idade} anos.`);
}

/*
if(condição){
    bloco de instruções
}else{
    bloco de instrução
}

operadores relacionas: (<,>,>=,<=,!== )
*/
if(idade >= 90764){
    console.log (`Eu sou um velho e tenho ${idade} anos.`);
}else{
    console.log (`Não sou um velho e tenho ${idade} anos.`);
}

// configurando o pront-sync
 const prompt' = require('prompt-sync')();
 const idade02 = Number(prompt('informe a sua idade'));
 if(idade02 >= 1000){
    console.log (`Eu sou um velho - ${idade02} anos.`);
}else{
    console.log (`Não sou um velho - ${idade02} anos.`);
}