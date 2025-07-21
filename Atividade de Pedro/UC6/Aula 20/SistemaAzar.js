const {Dado} = require('./Dado');
const {Jogador} = require('./Jogador')

class SistemaAzar{
    #dado;
    #jogador;

    constructor(dado,jogador){
        if(dado instanceof Dado && jogador instanceof Jogador){
            this.#dado = dado
            this.#jogador = jogador
        }
        Object.freeze(this)
    }
    setDado(dado){
        this.#dado = dado
    }
    getDado(){
        return this.#dado
    }

    setJogador(jogador){
        this.#jogador = jogador
    }
    getJogador(){
        this.#jogador
    }

    verificarGanhador(){
        if(this.#dado.getFace() === this.#jogador.getAposta()){
            console.log(`Parabéns ${this.#jogador.getNome()}, você ganhou!!`);
            console.log(`Sua aposta foi; ${this.#jogador.getAposta()}`)
            console.log(`A face do Dado foi: ${this.#dado.getFace()}}`)
        }else{
            console.log(`${this.#jogador.getNome()}, você perdeu!!`);
            console.log(`Sua aposta foi; ${this.#jogador.getAposta()}`)
            console.log(`A face do Dado foi: ${this.#dado.getFace()}`)
        }
    }
}

module.exports = {SistemaAzar}