let productos = [
    {
        id:1,
        nombre: "SILLA COOLER MASTER CALIBER R1 S PINK / WHITE",
        precio: 68249 ,
        imagen: "../img/silla1.png",
    },
    {   id:2,
        nombre: "SILLA CORSAIR T3 RUSH CHARCOAL / GREY",
        precio: 109990 ,
        imagen: "../img/sillas7.jpg",
    },
    {   id:3,
        nombre: "SILLA COOLER MASTER CALIBER PURPLE CAMO",
        precio: 68249 ,
        imagen: "../img/silla3.png",
    },
    {   id:4,
        nombre: "SILLA COOLER MASTER CALIBER R2 BLACK/PURPLE",
        precio: 73499 ,
        imagen: "../img/silla4.png",
    },
    {   id:5,
        nombre: "SILLA COOLER MASTER CALIBER R2C GREY",
        precio: 87139 ,
        imagen: "../img/silla5.png",
        
    },
    {   id:6,
        nombre: "SILLA COOLER MASTER CALIBER X1C COOLIN GREY",
        precio: 110248 ,
        imagen: "../img/silla6.png",      
    },

];

// ver en Local Storage si hay un array "productos"  sino lo crea

function productosLS() {
    return JSON.parse(localStorage.getItem("productos")) || [];  
}

// Guardo productos en Local Storage
function guardarProductosLS(productos)  {
    localStorage.setItem("productos" , JSON.stringify(productos));
}

// Renderizo Productos en pagina principal
function renderizarProductos() {
    let productos = productosLS () ;
    let contenido = "" ;
    
    for (let producto of productos) {
        contenido += `<div class="col-md-6 col-lg-3 g-5">
        <div class="card- border-0">
            <img src="${producto.imagen}" class="card-img" alt="${producto.nombre}">
            <div class="card-body">
              <h2 class="card-nombre text-center">${producto.nombre}</h2>
              <h3 class="card-text text-center">$${producto.precio}</h3>
              <p class="card-text text-center" title="Agrgar al Carrito"><a href="#" class="btn btn-primary" onclick="agregarCarrito(${producto.id})">AGREGAR</a></p>
            </div>
        </div>
        </div>`
    }


    if (document.getElementById("productos")) {
        document.getElementById("productos").innerHTML =  contenido ;
    } 
}

function buscarProducto(id) {
    let productos = productosLS();
    return productos.find(x => x.id == id);
}


guardarProductosLS(productos);
actualizarCarrito();
renderizarProductos();
