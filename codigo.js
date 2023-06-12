//funcion para las alertas
function alertaDeElecciones(quienElije,eleccion){
    if(eleccion==1){
       alert("el "+ quienElije+" eligio piedra")
  } else if(eleccion==2){
       alert("el "+ quienElije+" eligio papel")
  } else if(eleccion==3){
       alert("el "+ quienElije+" eligio tijera")
  } else{
      alert("el "+quienElije+" eligio piedra")
  }

} 
//funcion aliatorio      
function numeroAliatorio(min,max){ 
  return Math. floor(Math.random()*(max-min+1)+min)

}
//funcion para decidir el ganador
function quienGanaEntre (eleccionDeJugador,eleccionPc){
  if(eleccionDeJugador==eleccionPc){
      alert("empate")
  }else if(eleccionDeJugador==1 && eleccionPc==3){
      alert("ganastes")
  }else if(eleccionDeJugador==2 && eleccionPc==1){
      alert("ganastes")
  }else if(eleccionDeJugador==3 && eleccionPc==2){
      alert("ganates")


  } else{
      alert("perdistes")
  }
}   
//eleccion para nombrar al ganador final
function mostrarResultados(){
    alert(" haz acumulado "+
    victorias + " victorias, "+
    derrotas + " derrotas y "+
    empates + " empate ")
    if (victorias == 2){
        alert("tu eres el ganador");
        resetearVareables()

} else if (derrotas == 2){
    alert("ganadorElPc")
    resetearVareables()
} else {
    alert("tuvo un error")

}
    

}

//funcion para resetear variables
function resetearVareables(){
    victorias= 0
    derrotas= 0
    empates= 0

}
//decidiendo el ganador
let victorias = 0
let derrotas = 0
let empates = 0

while(victorias<2 && derrotas<2){
 //eleccion jugador
eleccionDeJugador=0
eleccionDeJugador=prompt("elije:1para piedra, elije:1para papel, elije: 1para piedra")
alertaDeElecciones("jugador",eleccionDeJugador)
eleccionPc = numeroAliatorio(1,3)
alertaDeElecciones("PC", eleccionPc)
quienGanaEntre(eleccionDeJugador, eleccionPc)
   mostrarResultados
}
 
