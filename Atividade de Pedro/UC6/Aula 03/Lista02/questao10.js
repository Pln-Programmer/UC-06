const prompt = require ('prompt-sync')();
const idade = Number (prompt('Digite sua idade: '))

if(idade <= 12){
    console.log (`Com ${idade} você é criança,vá brincar`)
}
if(idade >= 13 && idade <= 17){
    console.log (`Com ${idade} você é adolecente,vá estudar`)
}
if(idade >= 18){
    console.log (`Com ${idade} você é adulto,vá arrumar um emprego`)  
}