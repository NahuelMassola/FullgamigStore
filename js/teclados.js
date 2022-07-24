let productos = [
    {
        id:1,
        nombre: "Teclado Redragon Kumara K552",
        precio: 8339 ,
        imagen: "../img/tecladokumara.jpg",
    },
    {   id:2,
        nombre: "Teclado Redragon Shiva White K512",
        precio: 4649 ,
        imagen: "../img/tecladoshiva.jpg",
    },
    {   id:3,
        nombre: "Teclado Redragon Harper Pro K503",
        precio: 4547 ,
        imagen: "../img/tecladoharper.jpg",
    },
    {   id:4,
        nombre: "Teclado Redragon Fizz Pro",
        precio: 7377 ,
        imagen: "../img/tecladofizz.jpg",
    },
    {   id:5,
        nombre: "Teclado Redragon draconic K530",
        precio: 9570 ,
        imagen: "../img/tecladodraconic.jpg",
        
    },
    {   id:6,
        nombre: "Teclado Redragon Vara K551",
        precio: 7394 ,
        imagen: "../img/tecladovara.jpg",      
    },
    {   id:7,
        nombre: "Teclado Redragon Kumara K552",
        precio: 5881 ,
        imagen: "../img/tecladokumarawhite.jpg", 
    }, 
    {   id:8,
        nombre: "Teclado Redragon Fizz Pro K616 ",
        precio: 7360 ,
        imagen: "../img/tecladofizzpro.jpg",
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
