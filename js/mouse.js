let productos = [
    {
        id:1,
        nombre: "Mouse Redragon Griffin M607",
        precio: 2371 ,
        imagen: "../img/MouseGrifin.jpg",
    },
    {   id:2,
        nombre: "Mouse Redragon Centropho M601",
        precio: 2167 ,
        imagen: "../img/mousecentrophorus.jpg",
    },
    {   id:3,
        nombre: "Mouse Redragon Invader M719",
        precio: 2575 ,
        imagen: "../img/mouseinvader.jpg",
    },
    {   id:4,
        nombre: "Mouse Redragon Griffin white M607",
        precio: 2481 ,
        imagen: "../img/MouseGrifinblanco.jpg",
    },
    {   id:5,
        nombre: "Mouse Redragon Cobra white M711",
        precio: 3348 ,
        imagen: "../img/mousecobrawhite.jpg",
        
    },
    {   id:6,
        nombre: "Mouse Redragon Impact M908",
        precio: 4088 ,
        imagen: "../img/mouseimpact.jpg",      
    },
    {   id:7,
        nombre: "Mouse Redragon Memealion M710",
        precio: 2609 ,
        imagen: "../img/mousememealion.jpg", 
    }, 
    {   id:8,
        nombre: "Mouse Redragon Lonewolf M721",
        precio: 3629 ,
        imagen: "../img/mouselonewolf.jpg",
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




