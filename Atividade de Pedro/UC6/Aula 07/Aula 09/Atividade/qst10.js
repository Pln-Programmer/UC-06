let dia = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"]
let exercicio = ["Elevação lateral", "Supino", "Leg press"]
let exercicio1 = ["Agachamento", "Flexão de braço", "Prancha"]
let exercicio2 = ["Abdominal reto", "Afundo", "Puxada na barra"]
for(let i = 0; i < dia.length; i++){
    for(let j = 0; j < exercicio.length; j++){
    for(let d = 0; d < exercicio1.length; d++){
    for(let a = 0; a < exercicio2.length; a++){
    console.log(`${dia} tem que fazer ${exercicio}, ${exercicio1}, ${exercicio2}`)
}
}
}
}