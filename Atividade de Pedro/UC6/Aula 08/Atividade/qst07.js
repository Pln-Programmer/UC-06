let letras = ['casa', 'computador', 'sol', 'javascript', 'lua'];

for(let i = 0; i < letras.length; i++){
    let palavra = letras[i];
    let quantidade = palavra.length;
    if(quantidade > 5){
console.log(`A palavra ${letras[i]} tem ${quantidade} letras`)
    }
}