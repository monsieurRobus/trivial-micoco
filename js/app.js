
const preguntas = [
    { 
        id: 2022100701,
        titulo: "Lorem ipsum dolor sit amet ",
        descripcion: "LLLALLALALALALALALALALALLALALALA",
        opciones: ["Hí","U","Pero que dise","ni de blas"],
        correcta:0    
    },
    { 
        id: 2022100702,
        titulo: "No puedor no puedor ",
        descripcion: "LLLALLALALALALALALALALALLALALALA",
        opciones: ["Lala","Lele","Lili","Lolo"],
        correcta:1     
    },
    { 
        id: 2022100703,
        titulo: "No puedor no puedor ",
        descripcion: "LLLALLALALALALALALALALALLALALALA",
        opciones: ["Uno","Dos","Tres","Cuatro"],
        correcta:2    
    },
    { 
        id: 2022100704,
        titulo: "No puedor no puedor ",
        descripcion: "LLLALLALALALALALALALALALLALALALA",
        opciones: ["Uno","Dos","Tres","Cuatro"],
        correcta:3  
    },
    { 
        id: 2022100705,
        titulo: "No puedor no puedor ",
        descripcion: "LLLALLALALALALALALALALALLALALALA",
        opciones: ["Uno","Dos","Tres","Cuatro"],
        correcta:2   
    },
    { 
        id: 2022100706,
        titulo: "No puedor no puedor ",
        descripcion: "LLLALLALALALALALALALALALLALALALA",
        opciones: ["Uno","Dos","Tres","Cuatro"],
        correcta:1    
    },
    { 
        id: 2022100707,
        titulo: "No puedor no puedor ",
        descripcion: "LLLALLALALALALALALALALALLALALALA",
        opciones: ["Uno","Dos","Tres","Cuatro"],
        correcta:0    
    },
    { 
        id: 2022100708,
        titulo: "No puedor no puedor ",
        descripcion: "LLLALLALALALALALALALALALLALALALA",
        opciones: ["Lala","Lele","Lili","Lolo"],
        correcta:0    
    },
    { 
        id: 2022100709,
        titulo: "No puedor no puedor ",
        descripcion: "LLLALLALALALALALALALALALLALALALA",
        opciones: ["Lala","Lele","Lili","Lolo"],
        correcta:1    
    },
    { 
        id: 2022100710,
        titulo: "No puedor no puedor ",
        descripcion: "LLLALLALALALALALALALALALLALALALA",
        opciones: ["Hí","U","Pero que dise","ni de blas"],
        correcta:0    
    }
]

    

let seleccion=[];
let puntuacion=0;
// Nueva partida

const reseteoJuego = () => {
    puntuacion=0
    actualizaPuntuacion(puntuacion)
    barra2.style.width=0+'%'
    barra2.ariaValueNow=0;
}

const nuevaPartida = () => {
    modalMenu.style="none"
    reseteoJuego()
    
    // Realizamos una selección de preguntas
    const preguntasOrdenar = [...preguntas]
    // Primero creamos un array de index aleatorios que no se repitan
    seleccion = preguntasOrdenar.sort(() => {return Math.random() - 0.5}) // desordenamos array
    
    // Mostramos la primera pregunta
    mostrarPregunta(seleccion)

    // Cambiamos de pantalla
    setTimeout(()=>modalJuego.style="display:block",1000)
}

// Mostramos la pantalla final de muestra de puntos
const muestraPuntos = (puntos) => {
    modalJuego.style="none"
    setTimeout(()=>
    {
        modalPuntos.style="display:block";
    }
    ,500)

    setTimeout(() => {
        barra2.style.width=puntos+'%'
        barra2.ariaValueNow=puntos;
    },800)

}

// Actualiza la barra de progreso
const actualizaPuntuacion = (puntos) => {
    barra.style.width=puntos+'%'
    barra.ariaValueNow=puntos;
}


// Salir al menu principal
const volverMenu = () => {
    modalPuntos.style="display:none";
    setTimeout(()=>modalMenu.style="display:block",500)
}

// Actualización del modal de pregunta para mostrar una nueva pregunta
const mostrarPregunta = listaPreguntas => {
    if (listaPreguntas.length >0 )
    {    
        // Escribimos en cada campo el contenido de la pregunta
        titulo.innerHTML=listaPreguntas[0].titulo;
        idPregunta.innerHTML=listaPreguntas[0].id;
        descripcion.innerHTML=listaPreguntas[0].descripcion;

        //? Como hacer esto con bucles?

        for (let i=0;i<botonesOpciones.length;i++)
            botonesOpciones[i].innerHTML=listaPreguntas[0].opciones[i];    

        // En los atributos de las opciones, activamos la que es correcta

        for(opcion of botonesOpciones)
            opcion.dataset.correcta = false;

        switch(listaPreguntas[0].correcta){
            case 0:
                botonesOpciones[0].dataset.correcta = true;
                break;
            case 1:
                botonesOpciones[1].dataset.correcta = true;
                break;
            case 2:
                botonesOpciones[2].dataset.correcta = true;
                break;
            case 3:
                botonesOpciones[3].dataset.correcta = true;
                break;

        }
        // Eliminamos la pregunta de la selección
        listaPreguntas.shift()
    }
    else {
        muestraPuntos(puntuacion)
    }

        // Limpiamos de efectos las preguntas
        for(opcion of botonesOpciones)
            {
                opcion.classList.remove("correcto")
                opcion.classList.remove("incorrecto")
            }

            activarBotones()

    


}

const seleccionaOpcion = (e) => {
    //Comprobamos el valor del atributo para saber si es correcta la opcion seleccionada

    // En función de si la opcion es correcta o incorrecta, se activa un efecto y sumamos puntos
    if(e.target.getAttribute('data-correcta') === 'true')
        {
            puntuacion+=10;
            e.target.classList.add("correcto")
            
        }
    else   
        {
            e.target.classList.add("incorrecto")
        }
        // Desactivamos los "listeners" de los botones
        desactivarBotones()
        actualizaPuntuacion(puntuacion)

        // Activamos un temporizador para mostrar la siguiente pregunta
        setTimeout(()=>mostrarPregunta(seleccion),2000);
        
}

// Modales a manipular
const modalMenu = document.querySelector("#menu-principal")
const modalJuego = document.querySelector("#juego-preguntas")
const modalPuntos = document.querySelector("#puntuacion-final")

// Elementos a manipular del DOM

const titulo = document.querySelector("#titulo-pregunta")
const idPregunta = document.querySelector("#id-pregunta")
const descripcion = document.querySelector("#descripcion-pregunta")
const botonesOpciones = document.querySelectorAll(".boton-opciones")
const botonSalir = document.querySelector("#salir-menu")
const repetir = document.querySelector("#repetir")

const barra = document.querySelector("#barra-progreso")
const barra2 = document.querySelector("#barra-progreso-2")
// Inicio, mostramos el modal
modalMenu.style = "display:block"

const activarBotones = () => {

    for(opcion of botonesOpciones)
        opcion.addEventListener("click",seleccionaOpcion)

}

const desactivarBotones = () => {
    for(opcion of botonesOpciones)
        opcion.removeEventListener("click",seleccionaOpcion)
}

// Asociamos eventos a botones:
const botonNuevaPartida = document.querySelector('#nueva-partida')
botonNuevaPartida.addEventListener("click",nuevaPartida)
repetir.addEventListener("click",nuevaPartida)
botonSalir.addEventListener("click",volverMenu)


