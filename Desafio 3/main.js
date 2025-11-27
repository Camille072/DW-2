/*-----Primera PPT------
let num1 = 15
let num2 = 5

let resultado = num1%num2
console.log(resultado)

let nombre = "Cami"
let apellido = "Golindano"
console.log("Bienvenida "+nombre)

let nombreCompleto = nombre-apellido
console.log(nombreCompleto) 

/*-----Segunda PPT------

let precio = 15000
precio = 35000
console.log(precio)

 const prec = 15000
 prec = 30000

 let nombre = "Cami"
 let apellido = "Golindano"
 alert("Bienvenida "+nombre+" "+apellido)*/

/*const miCategoria = "Estandar"
 if(miCategoria=="SUPER"){
console.log("Tienes acceso a todas las herramientas")
 }else if(miCategoria == "PREMIUM"){
    console.log("Podes usar todo menos 4k")
 }else{
    console.log("Tienes solo hd")
 }*/


var usuarioIniciadoSesion = true; 
var totalComprasAcumuladas = 120; 

if (usuarioIniciadoSesion && totalComprasAcumuladas > 100) {
  alert("¡Felicidades! Usted cumple con los requisitos para un descuento.");
} else if (usuarioIniciadoSesion) {
  alert("Lo sentimos, su total de compras acumuladas es menor a $100. Compre más para calificar para un descuento.");
} else {
  alert("Por favor, inicie sesión para verificar su elegibilidad para un descuento.");
}

