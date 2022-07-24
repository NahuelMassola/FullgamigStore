let productos = [
    {
        id:1,
        nombre: "Monitor Philips 19 Pulgadas",
        precio: 35599 ,
        imagen: "../img/philips19.jpg",
    },
    {   id:2,
        nombre: "Monitor Philips 22 Pulgadas",
        precio: 39900 ,
        imagen: "../img/philips22.jpg",
    },
    {   id:3,
        nombre: "Monitor Philips 27 Pulgadas",
        precio: 41300 ,
        imagen: "../img/philips27.jpg",
    },
    {   id:4,
        nombre: "Monitor Samsung 32 Pulgadas",
        precio: 35599 ,
        imagen: "../img/samsung 32.png",
    },
    {   id:5,
        nombre: "Monitor Samsung 22 Pulgadas",
        precio: 45999 ,
        imagen: "../img/samsung22.png",
        
    },
    {   id:6,
        nombre: "Monitor Samsung 27 Pulgadas Curvo",
        precio: 54989 ,
        imagen: "../img/samsung27.png",      
    },
    {   id:7,
        nombre: "Monitor Samsung 24 Pulgadas Curvo",
        precio: 46990 ,
        imagen: "../img/samsungcurvo24.png", 
    }, 
    {   id:8,
        nombre: "Monitor Samsung 27 Pulgadas 4k",
        precio: 63990 ,
        imagen: "../img/samsung274k.jpg",
    }
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
