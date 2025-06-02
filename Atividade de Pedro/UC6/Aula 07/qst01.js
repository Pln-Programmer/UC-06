const prompt = require('prompt-sync')();
const ferias = Number (prompt('Em qual mês se encontra? '))

switch(ferias){
    case 1:
        case 12:
        console.log (`Nesse mês você esta de Ferias.`)
        break;
        case 2:
            case 3:
                case 4:
                    case 5:
                        case 6:
                            console.log(`Nesse mês você se encontra no 1° Semestre Letivo.`)
                            break;
                            case 7:
                                console.log (`Nesse mês você esta em período de Recesso`)
                                break;
                                case 8:
                                    case 9:
                                        case 10:
                                            case 11:
                                                console.log (`Nesse mês você se encontra no 2° Semestre Letivo`)
                                            break;
}
