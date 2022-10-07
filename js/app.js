
const preguntas = [
    { 
        id: 2022100701,
        titulo: "Lorem ipsum dolor sit amet ",
        descripcion: "LLLALLALALALALALALALALALLALALALA",
        opcionA: "Hí",
        opcionB: "U",
        opcionC: "Pero que dise",
        opcionD: "ni de blah",
        correcta:0    
    },
    { 
        id: 2022100702,
        titulo: "No puedor no puedor ",
        descripcion: "LLLALLALALALALALALALALALLALALALA",
        opcionA: "Lala",
        opcionB: "Lele",
        opcionC: "Lili",
        opcionD: "Lolo",
        correcta:1     
    },
    { 
        id: 2022100703,
        titulo: "No puedor no puedor ",
        descripcion: "LLLALLALALALALALALALALALLALALALA",
        opcionA: "Lala",
        opcionB: "Lele",
        opcionC: "Lili",
        opcionD: "Lolo",
        correcta:2    
    },
    { 
        id: 2022100704,
        titulo: "No puedor no puedor ",
        descripcion: "LLLALLALALALALALALALALALLALALALA",
        opcionA: "Lala",
        opcionB: "Lele",
        opcionC: "Lili",
        opcionD: "Lolo",
        correcta:3  
    },
    { 
        id: 2022100705,
        titulo: "No puedor no puedor ",
        descripcion: "LLLALLALALALALALALALALALLALALALA",
        opcionA: "Lala",
        opcionB: "Lele",
        opcionC: "Lili",
        opcionD: "Lolo" ,
        correcta:2   
    },
    { 
        id: 2022100706,
        titulo: "No puedor no puedor ",
        descripcion: "LLLALLALALALALALALALALALLALALALA",
        opcionA: "Lala",
        opcionB: "Lele",
        opcionC: "Lili",
        opcionD: "Lolo",
        correcta:1    
    },
    { 
        id: 2022100707,
        titulo: "No puedor no puedor ",
        descripcion: "LLLALLALALALALALALALALALLALALALA",
        opcionA: "Lala",
        opcionB: "Lele",
        opcionC: "Lili",
        opcionD: "Lolo",
        correcta:0    
    },
    { 
        id: 2022100708,
        titulo: "No puedor no puedor ",
        descripcion: "LLLALLALALALALALALALALALLALALALA",
        opcionA: "Lala",
        opcionB: "Lele",
        opcionC: "Lili",
        opcionD: "Lolo",
        correcta:0    
    },
    { 
        id: 2022100709,
        titulo: "No puedor no puedor ",
        descripcion: "LLLALLALALALALALALALALALLALALALA",
        opcionA: "Lala",
        opcionB: "Lele",
        opcionC: "Lili",
        opcionD: "Lolo",
        correcta:1    
    },
    { 
        id: 2022100710,
        titulo: "No puedor no puedor ",
        descripcion: "LLLALLALALALALALALALALALLALALALA",
        opcionA: "Lala",
        opcionB: "Lele",
        opcionC: "Lili",
        opcionD: "Lolo",
        correcta:0    
    }
]

    

let seleccion=[];
let puntuacion=0;
// Nueva partida
const nuevaPartida = () => {
    modalMenu.style="none"

    // Realizamos una selección de preguntas

    // Primero creamos un array de index aleatorios que no se repitan
    seleccion = preguntas.sort(() => {return Math.random() - 0.5}) // desordenamos array
    
    // Mostramos la primera pregunta
    mostrarPregunta(seleccion)

    // Cambiamos de pantalla
    setTimeout(()=>modalJuego.style="display:block",1000)
}

const muestraPuntos = () => {

}
// Actualiza la barra de progreso
const actualizaPuntuacion = () => {
    
}

const mostrarPregunta = listaPreguntas => {
    titulo.innerHTML=listaPreguntas[0].titulo
    idPregunta.innerHTML=listaPreguntas[0].id
    descripcion.innerHTML=listaPreguntas[0].descripcion
    opcionA.innerHTML=listaPreguntas[0].opcionA
    opcionB.innerHTML=listaPreguntas[0].opcionB
    opcionC.innerHTML=listaPreguntas[0].opcionC
    opcionD.innerHTML=listaPreguntas[0].opcionD

    opcionA.dataset.correcta = false;
    opcionB.dataset.correcta = false;
    opcionC.dataset.correcta = false;
    opcionD.dataset.correcta = false;

    switch(listaPreguntas[0].correcta){
        case 0:
            opcionA.dataset.correcta = true;
            break;
        case 1:
            opcionB.dataset.correcta = true;
            break;
        case 2:
            opcionC.dataset.correcta = true;
            break;
        case 3:
            opcionD.dataset.correcta = true;
            break;

    }
    listaPreguntas.shift()
    
}

const seleccionaOpcion = (e) => {
    //Comprobamos el valor del atributo para saber si es correcta la opcion seleccionada
    console.log(e.target.getAttribute('data-correcta'))
    if(e.target.getAttribute('data-correcta') === 'true')
        {
            puntuacion+=10;
        }
    else   
        {
            puntuacion+=10;
        }

        actualizaPuntuacion()

}

// Modales a manipular
const modalMenu = document.querySelector("#menu-principal")
const modalJuego = document.querySelector("#juego-preguntas")
const modalPuntos = document.querySelector("#puntuacion-final")

// Elementos a manipular del DOM

const titulo = document.querySelector("#titulo-pregunta")
const idPregunta = document.querySelector("#id-pregunta")
const descripcion = document.querySelector("#descripcion-pregunta")
const opcionA = document.querySelector("#opcionA")
const opcionB = document.querySelector("#opcionB")
const opcionC = document.querySelector("#opcionC")
const opcionD = document.querySelector("#opcionD")

// Inicio, mostramos el modal
modalMenu.style = "display:block"

// Asociamos eventos a botones:
const botonNuevaPartida = document.querySelector('#nueva-partida')
botonNuevaPartida.addEventListener("click",nuevaPartida)
opcionA.addEventListener("click",seleccionaOpcion)
opcionB.addEventListener("click",seleccionaOpcion)
opcionC.addEventListener("click",seleccionaOpcion)
opcionD.addEventListener("click",seleccionaOpcion)

