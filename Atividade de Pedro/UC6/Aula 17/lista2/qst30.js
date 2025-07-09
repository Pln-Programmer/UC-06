const prompt = require('prompt-sync')();
const senha = (prompt('Digite sua senha: '))

if(senha.length < 6){
    console.log(`A senha ${senha} é fraca`)
}else if(senha.length >= 6 && senha.length <= 10){
    console.log(`A senha ${senha} é média`)
}else if(senha.length > 10){
    console.log(`A senha ${senha} é forte`)
}else{
    console.log(`Erro! senha invalida.`)
}