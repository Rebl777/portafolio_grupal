let correo = document.getElementById("correo");
let correo_flotante = document.getElementById("correo_flotante");
let salida = document.getElementById("salida") ;

function entrar (){
    correo_flotante.classList.remove("oculto");
}

function salir (){
    correo_flotante.classList.add("oculto");
}

correo.addEventListener("click", entrar);
salida.addEventListener("click", salir);

console.log("JS conectado");