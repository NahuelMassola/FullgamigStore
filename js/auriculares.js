//DECLARO LOS PRODUCTOS
const productos = [
    {
        id:1,
        nombre: "Auriculares Pandora 2 ",
        precio: 5890 ,
        imagen: "../img/auricularespandora2.jpg",   
    },
    {   id:2,
        nombre: "Auriculares Icon H520",
        precio: 11398 ,
        imagen: "../img/auricularesicon.jpg",
    },
    {   id:3,
        nombre: "Auriculares Pelops 2.4G",
        precio: 9451 ,
        imagen: "../img/auricularespelops.jpg",
    },
    {   id:4,
        nombre: "Auriculares Ares H120",
        precio: 2592 ,
        imagen: "../img/auriculares ares.jpg",
    },
    {   id:5,
        nombre: "Auriculares Scylla H901",
        precio: 3569 ,
        imagen: "../img/auriculares scylla.jpg",
        
    },
    {   id:6,
        nombre: "Auriculares Pandora White",
        precio: 5720 ,
        imagen: "../img/auricularespandorawhite.jpg",      
    },
    {   id:7,
        nombre: "Auriculares Lamia H320",
        precio: 6876 ,
        imagen: "../img/auriculareslamia.jpg", 
    }, 
    {   id:8,
        nombre: "Auriculares Hylas  H260 ",
        precio: 3629 ,
        imagen: "../img/auriculareshylas.jpg",
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
        contenido += `
            <div class="col-md-6 col-lg-3 g-5 ">
              <div class="card border-0" >
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

