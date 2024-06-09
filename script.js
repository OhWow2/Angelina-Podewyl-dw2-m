let nombre;
let email;
let contraseña;
let usuarios = [];

function registroUsuario(){
    nombre = prompt("¿Cuál es tu nombre?")
    email= prompt("¿Cuál es tu email?")
    contraseña= prompt("¿Cuál es tu contraseña?")
    alert("Su nombre es: " + nombre + " " + email);
    let nuevoUsuario ={
        usuario:nombre,
        email:email,
        contraseña:contraseña
    }
    usuarios.push(nuevoUsuario)
    console.log (nuevoUsuario)

}
registroUsuario()

let emailIngresado;
let contraseñaIngresado;
let nombreIngresado

function inicioSesion(){
    nombreIngresado= prompt ("Ingrese su nombre")
    emailIngresado= prompt("Ingrese el Email")
    contraseñaIngresado= prompt("Ingrese la contraseña")

    if(email == emailIngresado && contraseña ==contraseñaIngresado && nombre==nombreIngresado){
        alert("Hola Bienvenido " + nombre)
        window.location.href= 'PaginaPrincipal.html'
    }else{
        alert("Ingrese un GMAIL o Contraseña valida")
    }
}


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
