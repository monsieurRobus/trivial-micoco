


// Mostramos el menú principal al poco abrir el juego




const nuevaPartida = () => {
    modalMenu.style="none"
    setTimeout(()=>modalJuego.style="display:block",1000)
}

const muestraPuntos = () => {

}


// Modales a manipular
const modalMenu = document.querySelector("#menu-principal")
const modalJuego = document.querySelector("#juego-preguntas")
const modalPuntos = document.querySelector("#puntuacion-final")

// Inicio, mostramos el modal
modalMenu.style = "display:block"

// Asociamos eventos a botones:
const botonNuevaPartida = document.querySelector('#nueva-partida')
botonNuevaPartida.addEventListener("click",nuevaPartida)

