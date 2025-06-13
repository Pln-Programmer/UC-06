let nota = [5,10,7,3,10];
let nome = ["Jonata", "Heitor", "Italo", "Erick", "Jucelino"]

for(let i = 0; i < nota.length; i++){
    if(nota[i] >= 6){
console.log(`O Aluno ${nome[i]} com a nota ${nota[i]} foi aprovado, Parabéns!!`)
    }else{
        console.log(`O Aluno ${nome[i]} com a nota ${nota[i]} foi para a recuperação, Estude mais!!`)
    }
}