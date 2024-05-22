let nombre;
let email;
let contraseña;

function registroUsuario(){
    nombre = prompt("¿Cuál es tu nombre?")
    email= prompt("¿Cuál es tu email?")
    contraseña= prompt("¿Cuál es tu contraseña?")
    alert("Su nombre es: " + nombre + " " + email)
}
registroUsuario ()
let emailIngresado;
let contraseñaIngresado;

function inicioSesion(){
    emailIngresado= prompt("Ingrese el Email")
    contraseñaIngresado= prompt("Ingrese la contraseña")
    if(email == emailIngresado && contraseña ==contraseñaIngresado){
        alert("Hola Bienvenido " + nombre)
    }else{
        alert("Ingrese un GMAIL o Contraseña valida")
    }
}
inicioSesion()

let contraseñaNueva
function actualizarContraseña(){
    emailIngresado= prompt("Ingrese el Email")
    contraseña = prompt("Ingrese la contraseña")
    if(email== emailIngresado && contraseña ==contraseñaIngresado){
        contraseñaNueva= prompt("Ingrese la nueva contraseña")
        contraseña = contraseñaNueva;
        alert(contraseña);
    }else{
        alert("Ingrese un GMAIL o Contraseña valida")
    }
    
}
actualizarContraseña()