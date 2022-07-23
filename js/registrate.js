class Registro {
    constructor (nombre,telefono, email ,contraseña ,confirmarContraseña) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.contraseña = contraseña;
        this.confirmarContraseña = confirmarContraseña;
        this.email = email;
    }
}

function validarRegistro () {
    let nombre = document.getElementById("name").value;
    let telefono = document.getElementById("phone").value;
    let contraseña = document.getElementById("password").value;
    let confirmarContraseña = document.getElementById ("password-confirm").value;
    let nuevoregisto = new Registro (nombre, telefono , contraseña , confirmarContraseña);
    console.log(nuevoregisto);
    

    if (nombre === "") {
      resultado.innerHTML =  "<p class='text-white bg-danger text-center mt-3'>falta completar un Campo!</p>" ;
      return false;
    } else {
        resultado.innerHTML = "" ;
    }

    if (telefono === "") {
        resultado.innerHTML = "<p class='text-white bg-danger text-center mt-3'>falta completar un Campo!</p>" ;
        return false;
    } else {
          resultado.innerHTML = "" ;
    }

    if (email === "") {
        resultado.innerHTML = "<p class='text-white bg-danger text-center mt-3'>falta completar un Campo!</p>" ;
        return false;
    } else {
          resultado.innerHTML = "" ;
    }

    if (contraseña === "") {
        resultado.innerHTML = "<p class='text-white bg-danger text-center mt-3'>falta completar un Campo!</p>" ;
        return false;
    } else {
          resultado.innerHTML = "" ;
    }

    if (confirmarContraseña === "") {
        resultado.innerHTML = "<p class='text-white bg-danger text-center mt-3'>falta completar un Campo!</p>" ;
        return false;
    } else {
          resultado.innerHTML = "" ;
    }

    guardarDatos (nombre,telefono,contraseña,confirmarContraseña) ;
}
// Guardo Datos en Local Storage
function guardarDatos (nombre,telefono ,contraseña ,confirmarContraseña) {
    const datosGuardado = {nombre:nombre,telefono:telefono,contraseña:contraseña,confirmarContraseña:confirmarContraseña};
    const datosGuardados = [];
    localStorage.setItem("datosGuardado" ,  JSON.stringify(datosGuardado));

    // Borro Formulario una vez completado los datos
    let formulario = document.getElementById("registro1");
    formulario.innerHTML = "" ;
    
    // agrego nuevo contenido al html
    let nuevainfo = document.createElement("div");
     nuevainfo.innerHTML = "Gracias Registro Exitoso" ;

     nuevainfo.className = "info-registo" ;
     formulario.appendChild(nuevainfo);
    
 }

 let resultado = document.getElementById("resultado");
document.getElementById("join-free").addEventListener("click" , validarRegistro);