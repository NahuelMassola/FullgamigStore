class Registro {
    constructor (nombre,telefono, direccion) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
        this.email = email;
    }
}

function validarRegistro () {
    let nombre = document.getElementById("name").value;
    let telefono = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let direccion = document.getElementById ("direccion").value;
    let nuevoregisto = new Registro (nombre, telefono , email , direccion);
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

    if (direccion === "") {
        resultado.innerHTML = "<p class='text-white bg-danger text-center mt-3'>falta completar un Campo!</p>" ;
        return false;
    } else {
          resultado.innerHTML = "" ;
    }

    guardarDatos (nombre,telefono,email,direccion) ;
    vaciarLS();
}

// Guardo Datos en Local Storage
function guardarDatos (nombre,telefono ,email ,direccion) {
    const datosGuardado = {nombre:nombre,telefono:telefono,email:email,direccion:direccion};
    const datosGuardados = [];
    localStorage.setItem("datosGuardado" ,  JSON.stringify(datosGuardado));

    // Borro Formulario una vez completado los datos
    let formulario = document.getElementById("registro1");
    formulario.innerHTML = "" ;
    
    // agrego nuevo contenido al html
    let nuevainfo = document.createElement("div");
     nuevainfo.innerHTML = `<div class="container-fluid ">
     <div class="conteiner">
       <h3 class="texto-fincompra">GRACIAS POR TU COMPRA</h3>
       <a class="btn btn-primary text-white" href="../index.html">Volver al Inicio</a>
     </div>
 </div>` ;

     nuevainfo.classList = "info-registo" ;
     formulario.appendChild(nuevainfo);
    
 }

 function vaciarLS () {
    localStorage.removeItem("carrito") ;
 } 

 let resultado = document.getElementById("resultado");
document.getElementById("join-free").addEventListener("click" , validarRegistro);
