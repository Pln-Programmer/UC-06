// function saudacao(){
//     console.log("Hello Word!")
// }

// // saudacao();


function saudacao(nome){
    console.log(`Hello Word, ${nome}`)
}

saudacao("Pedro");


function somar(a,b){
    return a+b; //retorna o valor da soma
}
let total = somar(3,10);
console.log(total)


function potenciacao(base, expoente){
    return base**expoente
}
let resultado = potenciacao(2,3);
console.log(resultado);


let dobro = (x) => x * 2
console.log(dobro(10))


let games = ["Pokemon", "Free Fire", "csgo"]
function exibirarray(array){
    array.forEach(item => console.log(item));
}
exibirarray(games);