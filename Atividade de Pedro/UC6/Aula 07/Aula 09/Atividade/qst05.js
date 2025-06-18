let dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"]
let horario = ["08:00", "08:30", "09:00", "09:30", "10:00"]

for(let i = 0; i < dias.length; i++){
    for(let j = 0; j < horario.length; j++){
    console.log(`${dias[i]} às ${horario[j]}`)
}
}