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
      resultadoNombre.innerHTML =  "<p class='text-danger'><b>falta completar el Nombre</b></p>" ;
      return false;
    } else {
        resultadoNombre.innerHTML = "" ;
    }

    if (telefono === "") {
        resultadoTelefono.innerHTML = "<p class='text-danger'><b>falta completar el Telefono</b></p>" ;
        return false;
    } else {
          resultadoTelefono.innerHTML = "" ;
    }

    if (email === "") {
        resultadoEmail.innerHTML = "<p class='text-danger'><b>falta completar el Email</b></p>" ;
        return false;
    } else {
          resultadoEmail.innerHTML = "" ;
    }

    if (direccion === "") {
        resultadoDireccion.innerHTML = "<p class='text-danger'><b>falta completar la Direccion</b></p>" ;
        return false;
    } else {
          resultadoDireccion.innerHTML = "" ;
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
     nuevainfo.innerHTML = `
            <div class="container-fluid ">
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
