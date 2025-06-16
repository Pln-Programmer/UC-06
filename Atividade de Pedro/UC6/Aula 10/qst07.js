let passos = 0

do {
    passos += 1000
    if (passos === 10000) {
        console.log(`Meta de 10000 passos foi alcançado!!!!`);
    } else {
        console.log(`Passos : ${passos}`);
    }
} while (passos < 10000);