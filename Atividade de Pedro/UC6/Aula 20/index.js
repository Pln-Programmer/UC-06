const prompt = require('prompt-sync')();
const {Dado} = require('./Dado');
const {Jogador} = require('./Jogador');
const {SistemaAzar} = require('./SistemaAzar')

function iniciarSistema(){
    let novoTurno = "";
    console.log("Bem-Vindo ao Tigrinho177")
    let nome = prompt('Informe o seu nome: ');
    do{
        
        let aposta = parseInt(prompt('Digite um valor de 1 a 6: '));
        let lance = new Dado();
        let jogador = new Jogador(nome, aposta);
        const tigrinho = new SistemaAzar(lance, jogador);
        tigrinho.verificarGanhador();

        novoTurno = prompt("Digite S para uma nova aposta ou N para encerrar: ")


    }while(novoTurno.toUpperCase() !== "N")


}

iniciarSistema();