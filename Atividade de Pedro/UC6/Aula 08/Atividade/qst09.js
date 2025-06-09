let numero = [5,32,-8,20,26];

let maiornumero = numero[0] //primeira numero do array

for (let i = 0; i < numero.length; i++) {
    if(numero[i] > maiornumero){
        maiornumero = numero[i]
    }
}
console.log(maiornumero)