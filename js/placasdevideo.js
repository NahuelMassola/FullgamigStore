let productos = [
    {
        id:1,
        nombre: "Colorful RTX3080 TI OC12GB GDDR6",
        precio: 254419 ,
        imagen: "../img/rtx380ti.jpg",
    },
    {   id:2,
        nombre: "Colorful RTX3060 TI OC 8GB GDDR6",
        precio: 123689 ,
        imagen: "../img/rtx360ti.jpg",
    },
    {   id:3,
        nombre: "Colorful RTX3070 TI OC8GB GDDR6",
        precio: 183019 ,
        imagen: "../img/rtx370ti.jpg",
    },
    {   id:4,
        nombre: "Colorful RTX3070 Ti OC 8GB GDDR6",
        precio: 182019 ,
        imagen: "../img/rtx370tiw.jpg",
    },
    {   id:5,
        nombre: "Colorful RTX3080 OC 10GB GDDR6X",
        precio: 190399 ,
        imagen: "../img/rtx380.jpg",
        
    },
    {   id:6,
        nombre: "Colorful RTX3060 OC 12GB GDDR6",
        precio: 105579 ,
        imagen: "../img/rtx360.jpg",      
    },
    {   id:7,
        nombre: "Colorful GTX1660 6GB Super",
        precio: 65359 ,
        imagen: "../img/gtx1660.jpg", 
    }, 
    {   id:8,
        nombre: "Colorful RTX3060 TI OC 8GB GDDR6 ",
        precio: 124689 ,
        imagen: "../img/rtx360ti.jpg",
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
