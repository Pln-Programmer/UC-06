const prompt = require('prompt-sync')();
const nome = (prompt('Informe o seu Nome: '))
const preco = Number (prompt('Qual o preço do produto: '))
let valorTotal = 0;

if(preco>=1 && preco<100){
    console.log (`Senhor(a) ${nome} o valor de ${preco} não haverá desconto`)
}else if(preco<=300 ){
    let desconto1 = preco * 0.95
    console.log (`Senhor(a) ${nome} o valor de R$${preco} foi aplicado um desconto de 5% e fica R$${desconto1}`)
}else if(preco<500){
    let desconto2 = preco * 0.90
    console.log (`Senhor(a) ${nome} o valor de R$${preco} foi aplicado um desconto de 10% e fica R$${desconto2}`)
}else if(preco>=500){
    let desconto3 = preco * 0.85
    console.log (`Senhor(a) ${nome} o valor de R$${preco} foi aplicado um desconto de 15% e fica R$${desconto3}`)
}else{
    console.log (`Erro!! Dados não encontrados`)
}