class Jogo{
titulo;
genero;
ano;


constructorr(titulo, genero, ano){
    this.titulo = titulo
    this.genero = genero
    this.ano = ano
}
getTitulo(){
    return this.titulo;
}
getGenero(){
    return this.genero;
}
getAno(){
    return this.ano;
}


setTitulo(titulo){
    this.titulo = titulo
}
setGenero(genero){
    this.genero = genero
}
setAno(ano){
    this.ano = ano
}


exibirDados(){
    return `
    Titulo: ${this.titulo}
    Gênero: ${this.genero}
    Ano: ${this.ano}
    `
    
}

}

let jogo01 = new Jogo("Tibia", "RPG", "1997")
let jogo02 = new Jogo("Free fire", "Battle Royale", "2017")

console.log(jogo01.exibirDados())
console.log(jogo02.exibirDados())
jogo01.setTitulo("Tibia 2")
console.log(jogo01.exibirDados())