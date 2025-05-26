const prompt = require('prompt-sync')();
let sair = false;

do {
    const x = Number(prompt('Digite sua nota na N1: '))
    const y = Number(prompt('Digite sua nota na N2: '))
    const z = Number(prompt('Digite sua nota na N3: '))

    if (x >= 0 && y >= 0 && z >= 0 && x <= 10 && y <= 10 && z <= 10) {
        const media = parseInt(prompt(`Digite 1 para Média Aritmética, 2 para Média Geométrica, 3 para Média Ponderada e 4 para Sair: `))

        switch (media) {
            case 1:
                let aritmetica = (x + y + z) / 3;
                console.log(`Sua Média Aritmética é ${aritmetica}`);
                break;
            case 2:
                let geometrica = (x * y * z) ** (1 / 3);
                console.log(`Sua Média Geométrica é ${geometrica}`);
                break;
            case 3:
                let ponderada = (x + 2 * y + 3 * z) / 6;
                console.log(`Sua Média Ponderada é ${ponderada}`);
                break;
            case 4:
                sair = true;
                break;
            default:
                console.log('Opção inválida.');
        }

    } else {
        console.log(`Erro fatal, nota inválida.`);
    }
} while (!sair);