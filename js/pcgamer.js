let productos = [
    {
        id:1,
        nombre: "PC AMD Ryzen 5 4600G+8GB+480GB SSD",
        precio: 79639 ,
        imagen: "../img/ryzen5.jpg",
    },
    {   id:2,
        nombre: "PC AMD Ryzen 7 5700G+8GB+480GB SSD",
        precio: 152999 ,
        imagen: "../img/ryzen78.jpg",
    },
    {   id:3,
        nombre: "PC AMD Ryzen 7 5700G+16GB+240GB SSD",
        precio: 153434 ,
        imagen: "../img/ryzen716.jpg",
    },
    {   id:4,
        nombre: "PC AMD Ryzen 7 5700G+8GB+240GB SSD",
        precio: 148139 ,
        imagen: "../img/ryzen7240.jpg",
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

guardarProductosLS(productos);
actualizarCarrito();
renderizarProductos();
