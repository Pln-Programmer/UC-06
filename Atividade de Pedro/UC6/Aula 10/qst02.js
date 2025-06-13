let dinheiro = 0

while (dinheiro < 100) {
    dinheiro += 10
    console.log(`R$${dinheiro},00`)
    if (dinheiro === 100) {
        console.log(`Sua meta de R$100,00 foi alcançado!!!!!`)
    }
}