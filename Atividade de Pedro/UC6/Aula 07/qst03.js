// Digite 0 para encerrar
const prompt = require('prompt-sync')();
let voto
let joao = 0
let maria = 0
let jose = 0
let branco = 0
let nulo = 0

do {
    console.log
        (`-----------Candidatos-----------
1: Jóse
2: Maria
3: João
4: Voto em Branco
`)
    voto = Number(prompt('Qual candidato deseja votar? Digite o numero dele: '))

    switch (voto) {
        case 1:
            jose++
            console.log(`Seu voto foi realizado com sucesso, no candidato Jóse`)
            break;
        case 2:
            maria++
            console.log(`Seu voto foi realizado com sucesso, no candidato Maria`)
            break;
        case 3:
            joao++
            console.log(`Seu voto foi realizado com sucesso, no candidato João`)
            break;
        case 4:
            branco++
            console.log(`Seu voto foi Branco`)
            break;
        
        case 0:
            if (jose === maria || jose === joao || maria === joao
            ) {console.log(` 
        Votação encerrada.
     !!!!Temos um empate!!!!
------------Resultado------------
Jóse: ${jose} Votos.
Maria: ${maria} Votos
João: ${joao} Votos
Voto em Branco: ${branco} Votos
Nulo: ${nulo} Votos`)
                    }else {
                console.log
                    (`      Votação encerrada.
------------Resultado------------
Jóse: ${jose} Votos.
Maria: ${maria} Votos
João: ${joao} Votos
Voto em Branco: ${branco} Votos
Nulo: ${nulo} Votos`)
                }        

                break;
                default:
            nulo++;
            console.log(`Seu voto foi Nulo`)
        

    }
} while (voto !== 0)