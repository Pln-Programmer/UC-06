let dinheiro = 0
let semana = 0

while (dinheiro < 100) {
    dinheiro += 10;
    semana++;
    console.log(`Semana ${semana} - R$${dinheiro},00`)
    if (dinheiro === 100) {
        console.log(`Sua meta de R$100,00 foi alcançado!!!!!`)
    }
}
