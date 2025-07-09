const prompt = require('prompt-sync')();
const mes = prompt('Digite o mês: ')

if(mes.toUpperCase() === "SETEMBRO" || mes.toUpperCase() === "OUTUBRO" || mes.toUpperCase() === "NOVEMBRO"){
    console.log(`No mês de ${mes} está na estação do primavera`)
}else if(mes.toUpperCase() === "DEZEMBRO" || mes.toUpperCase() === "JANEIRO" || mes.toUpperCase() === "FEVEREIRO"){
    console.log(`No mês de ${mes} está na estação do verão`)
}else if(mes.toUpperCase() === "MARÇO" || mes.toUpperCase() === "ABRIL" || mes.toUpperCase() === "MAIO"){
        console.log(`No mês de ${mes} está na estação do outono`)
}else if(mes.toUpperCase() === "JUNHO" || mes.toUpperCase() === "JULHO" || mes.toUpperCase() === "AGOSTO"){
        console.log(`No mês de ${mes} está na estação do inverno`)
}else{
    console.log(`Erro! mês invalido.`)
}