const prompt = require('prompt-sync')();
let sair = (prompt('Deseja fazer um novo calculo? Digite "s" se for sim e "n" se for não. '))
do{
const x = Number(prompt('Digite sua nota na N1:'))
const y = Number(prompt('Digite sua nota na N2:'))
const z = Number(prompt('Digite sua nota na N3:'))

if (x >= 0 && y >= 0 && z >= 0 && x <= 10 && y <= 10 && z <= 10) {
    const media = parseInt(prompt(`Digite 1 para Média Aritmetrica, 2 para Média Geomêtrica, 3 Média Ponderada: `))

    switch (media){
    case 1:
        let aritmetrica = (x + y + z) / 3;
        console.log(`Sua Média Aritmetrica é ${aritmetrica}`)
        break;
    case 2:
        let geometrica = (x*y*z)**(1/3)
            console.log(`Sua Média Geomêtrica é ${geometrica}`)
        break;
    case 3:
        let ponderada = (x + 2 * y + 3 * z) / 6;
            console.log(`Sua Média Ponderada é ${ponderada}`)
        break;
    }

} else {
    console.log(`Erro fatal, nota não encontrata.`)
}
}while(sair.toLowerCase()!== 'n')