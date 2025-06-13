let semana = ["Domingo", "Segunda", "Terça", "Quarta","Quinta","Sexta", "Sábado" ];

for(let i = 0; i < semana.length; i++){
if(i === 0 || i === 6){
    console.log(`${i+1} - ${semana[i]}, é final de semana.`)
}else{
     console.log(`${i+1} - ${semana[i]}`)
}
}