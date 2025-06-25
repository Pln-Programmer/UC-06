# Array

Uma estrutura de dados homogênia e heterogênea.
Ex de um array homogênia:
"let numeros = [1, 3, 7,92,34,12];
console.çog(numeros[0]);"
<!-- Esse numero apois a tag "numeros" difene o que ele vai mostrar, como está estabelecido a tag "[0]", ele ira mostrar o numero 1. -->


"let numeros = [1, 2, 3];
numeros.push(4); 
console.log(numeros)"
<!-- Adicionar um novo elemento ao array, no final. -->
<!-- Esse comando vai adicionar os elementos dentro desse parêntese. -->

"numeros.pop();
console.log(numeros);"
<!-- Remover o ultimo elemento do array -->

"numeros.unshift(4);
console.log(numeros);"
<!-- Adiciona um elemento ao inicio o array -->


"numeros.shift();
console.log(numeros)"
<!-- Remove o primeiro elemento do array -->


console.log(numeros.length);
<!-- Retorna o tamanho do array (posições) -->


let estados = ["RN","AP","RJ","RS","MJ"]
console.log(estados.indexOf("PI"))
<!-- Retornar o indice do valor ou -1 se não for definida -->


console.log(estados.includes(PI));
<!-- Verifica se um valor existe no array (true/false) -->

estados.reverse();
console.log (estados)
<!-- Inverte as posições dos intens dentro do array -->


let nomes = ["Lucas", "Ana", "João", "Pedro", "Aline"];
nomes.sort();
<!-- para strings (palavras) -->
numeros.sort((a,b) => a-b);
<!-- para uso com numeros -->
console.log(nomes);
<!-- Ordenação do array -->


nomes.forEach(n=>{
    console.log(n);
})



numeros.map(x => x + 2);
console.log(numeros)
<!-- Mapeia e retorna um novo array com modificaçãoes ou copia -->


let valores = [10, 20, 30, 40];
let maiores = valores.filter(x=> x > 25);
<!-- filtrar e retornar valores acime de 25 -->
console.log(maiores);

valores.find(x=> x>=20)
<!-- Ele vai retornar o primeiro valor encontrado no array -->