let productos = [
    {
        id:1,
        nombre: "Silla Coller Master Caliber R1 S Pink-White",
        precio: 68249 ,
        imagen: "../img/silla1.png",
    },
    {   id:2,
        nombre: "Silla Corsair T3 Rush Charcoal-Grey",
        precio: 109990 ,
        imagen: "../img/sillas7.jpg",
    },
    {   id:3,
        nombre: "Silla Coller Master Caliber Purpre Come",
        precio: 68249 ,
        imagen: "../img/silla3.png",
    },
    {   id:4,
        nombre: "Silla Coller Master Caliber R2 Black-Purple",
        precio: 73499 ,
        imagen: "../img/silla4.png",
    },
    {   id:5,
        nombre: "Silla Coller Master Caliber R2C Grey",
        precio: 87139 ,
        imagen: "../img/silla5.png",
        
    },
    {   id:6,
        nombre: "Silla Coller Master Caliber X1C Coolin Grey",
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
        <div class="card border-0">
            <img src="${producto.imagen}" class="card-img" alt="${producto.nombre}">
            <div class="card-body">
              <h3 class="card-nombre text-center">${producto.nombre}</h3>
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
