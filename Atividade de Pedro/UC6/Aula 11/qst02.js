let a = [1, 2, 3, 2, 2, 2, 5, 7, 9, 2, 4, 6, 3, 5, 7];
let b = [];
let posicao = 0
let soma = 0

for(let i = 0; i < 5; i++){
    for(let j = 0; j < 3; j++){
        soma += a[posicao]
        posicao++
    }
    b.push(soma/3)
    soma = 0
}
console.log(b);
