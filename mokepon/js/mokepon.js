let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    // JS no acepta guion en los nombres, se diferencia con Mayusculas en cada palabra que inicie
    // el metodo getElementByID regresa cualquier elemento que necesitemos con el ID que le indiquemos
    // metodo addEventListener, se usa para indicar que evento queremos escuchar (click), la "coma (,) separa los argumentos que queramos llamar"
    
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'
    
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)

}

// se crea la funcion para que funcione la parte de arriba 
function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'
    // crear variables para luego preguntar la validación usando el input
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangostelvis = document.getElementById('langostelvis')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    /* condicional para saber qué mascota escogio el jugador, preguntar si tiene la propiedad
         checked con resultado "true"
         el inner.HTML muestra toda la información que hay dentro del elemento, es una forma de leer el
         documento html dentro de nuestras etiquetas*/
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = 'Langostelvis'
    } else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = 'Tucapalma'
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = 'Pydos'
    } else {
        alert('¡Debes seleccionar una mascota!')
    }
    // indicarle al jugador que debe si o si escoger una opción para iniciar el juego
    if (mascotaJugador != "") {
        spanMascotaJugador.innerHTML = mascotaJugador
        seleccionarMascotaEnemigo()
    }
}
function seleccionarMascotaEnemigo() {

    let mascotaEnemigoAleatorio = aleatorio(1, 6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaEnemigoAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaEnemigoAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else if (mascotaEnemigoAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    } else if (mascotaEnemigoAleatorio == 4) {
        spanMascotaEnemigo.innerHTML = 'Langostelvis'
    } else if (mascotaEnemigoAleatorio == 5) {
        spanMascotaEnemigo.innerHTML = 'Tucapalma'
    } else {
        spanMascotaEnemigo.innerHTML = 'Pydos'
    }
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){ 
        let ataqueAleatorio = aleatorio(1,3)
    
        if(ataqueAleatorio == 1){
            ataqueEnemigo = 'FUEGO'
        } else if(ataqueAleatorio == 2){
            ataqueEnemigo = 'AGUA'
        } else{
            ataqueEnemigo = 'TIERRA'
        }
        combate()
}
// COMBATE 
function combate(){

    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje('EMPATE 🥱')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje('GANASTE 🥳')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje('GANASTE 🥳')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje('GANASTE 🥳')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo   
    }else{
        crearMensaje('PERDISTE 🥶')
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador

    }

    // revisar vidas 
    revisarVidas()
}


function revisarVidas(){
    if(vidasEnemigo == 0){
        mensajeFinal('🎇🎇 GANASTE LA BATALLA 🎇🎇')
    }else if( vidasJugador == 0){
        mensajeFinal('🚩🚩PERDISTE LA BATALLA AMIGO 🚩🚩')
    }
}

// funcion para crear mensajes 
function crearMensaje(resultado){
    let seccionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ' La mascota del enemigo atacó con ' + ataqueEnemigo + ' - ' + resultado

    seccionMensajes.appendChild(parrafo)
}

function mensajeFinal(resultadoFinal){
    let seccionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    seccionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}
//Funcion aleatorio para el contrincante
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)

}

// escuchar cualquier evento que le pase al navegador
window.addEventListener('load', iniciarJuego)