let titulo = document.querySelector(".titulo")
titulo.innerHTML="nuevo titulo"
titulo.style.color="red"

let subtitulo = document.querySelector("#subtitulo")
subtitulo.style.color="blue"
subtitulo.innerHTML="nuevo subtitulo con js"

let enlace = document.querySelector("a")
enlace.style.textDecoration="none"
enlace.style.fontSize="20px"




function ModoOscuro(){
    let fondo = document.querySelector("body")
    fondo.style.backgroundColor="black"

    let letras = document.querySelector("div")
    letras.style.color="white"
}
function ModoClaro(){
    let fondo2 = document.querySelector("body")
    fondo2.style.backgroundColor="white"
    let letras2 = document.querySelector("#letras")
    letras2.style.color="black"

}