// let nota = [5,10,7,3,10];
// let nome = ["Jonata", "Heitor", "Italo", "Erick", "Jucelino"]
// let media = 0

// for(let i = 0; i < nota.length; i++){
//     if(nota[i] > 6){
//     media++
// console.log(`O Aluno ${nome[i]} com a nota ${nota[i]} foi aprovado, Parabéns!!`)
//     }else{
//         console.log(`O Aluno ${nome[i]} com a nota ${nota[i]} foi para a recuperação, Estude mais!!`)
//     }
// }
// console.log(`${media} alunos ficaram acima da média`)

const prompt = require('prompt-sync')();

let media = 0

for (let i = 0; i <= 5; i++) {
    let nota = Number(prompt('Digite sua nota: '))
    if (nota > 6) {
        media++
        console.log(`Com a nota ${nota} foi aprovado, Parabéns!!`)
    } else {
        console.log(`Com a nota ${nota} foi para a recuperação, Estude mais!!`)
    }
}
console.log(`${media} alunos ficaram acima da média`)