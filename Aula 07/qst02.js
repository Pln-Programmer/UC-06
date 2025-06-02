const prompt = require('prompt-sync')();
let pedido;
let quantidade;
let resultado = 0;


const refrigerante = 1.50 
const Cachorro = 1
const bauru = 1.30
const Hamburguer = 1.40
const cheeseburguer = 1.20
do{

    console.log
(`------------Cardapio------------
Código | Produto        | Preço (R$)
1      | Refrigerante   | 1.50
2      |Cachorro Quente | 1.00
3      |Bauru           | 1.30
4      |Hamburguer      | 1.40
5      |Cheeseburguer   | 1.20`)
 pedido = Number (prompt('Informe o numero do seu pedido(Um de cada vez, Por favor), digite 0 para finalizar o pedido: '))

 
switch(pedido){
    case 0:
        console.log(`Seu pedido foi encerrado! e o seu pedido deu R$${resultado}`)
break;
case 1:
quantidade = Number(prompt('Quantos? '))
    resultado += refrigerante * quantidade
    console.log(`O numero de ${quantidade} de Refrigerante(s) foi adicionado ao seu pedido`)
    break;
    case 2:
quantidade = Number(prompt('Quantos? '))
        resultado += Cachorro * quantidade
    console.log(`O numero de ${quantidade} de Cachorro(s) Quente(s) foi adicionado ao seu pedido.`)
    break;
    case 3:
quantidade = Number(prompt('Quantos? '))
        resultado += bauru * quantidade
    console.log(`O numero de ${quantidade} de Bauru(s) foi adicionado ao seu pedido`)
    break;
    case 4:
quantidade = Number(prompt('Quantos? '))
        resultado += Hamburguer * quantidade
    console.log(`O numero de ${quantidade} de Cheeseburguer(s) foi adicionado ao seu pedido`)
    break;
    case 5:
quantidade = Number(prompt('Quantos? '))
        resultado += cheeseburguer * quantidade
    console.log(`O numero de ${quantidade} de Refrigerantes foi adicionado ao seu pedido`)
    break;
    default:
            console.log("Código inválido. Por favor, escolha uma opção de 1 a 5 ou 0 para encerrar.");
            break;
}
}while(pedido !== 0)