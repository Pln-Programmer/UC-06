const prompt = require ('prompt-sync')();
const preco = Number (prompt('Digite o Preço: '))

if(preco > 100 ){
    let precodesconto = (preco * 0.9)
    console.log (`apois o desconto seu preço é de R$${precodesconto}`)
}else{
    console.log (`seu preço continua o mesmo`)
}