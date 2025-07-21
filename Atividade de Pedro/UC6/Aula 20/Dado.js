class Dado {
    #face;

    constructor(){
        let faceRandom = Math.floor(Math.random() * 6 + 1)
        this.#face = faceRandom
        Object.freeze(this)
    }
    setFace(face){
        this.#face = face
    }
    getFace(){
        return this.#face
    }
}
module.exports = {Dado}