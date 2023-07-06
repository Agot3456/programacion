function iniciarJuego(){
    let botonMascotaJugdor = document.getElementById('boton-pokemon')
    botonMascotaJugdor.addEventListener("click",seleccionarmascotajugador)
}
function seleccionarmascotajugador(){
    let inputCharmader = document.getElementById("charmaded")
    let inputBulbasaur = document.getElementById("Bulbasaur")
    let inputSquirtle = document.getElementById("Squirtle")

    if(inputCharmader.checked){
        alert("elegistes a Charmander")
    } else if (inputBulbasaur.checked){
        alert("elegistes a Bulbasaur")
    } else if (inputSquirtle.checked){
        alert("elegistes a squirtle")
    } else {
        alert("escoje un pokemon")
    }

}

window.addEventListener("load",iniciarJuego)

