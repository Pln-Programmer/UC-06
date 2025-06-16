let semana = ["Domingo", "Segunda", "Terça", "Quarta","Quinta","Sexta", "Sábado" ];

for(let i = 0; i < semana.length; i++){
if(semana[i] === "Sábado" || semana[i] === "Domingo"){
    console.log(`${i+1} - ${semana[i]}, é final de semana.`)
}else{
     console.log(`${i+1} - ${semana[i]}`)
}
}