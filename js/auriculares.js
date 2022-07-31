//DECLARO LOS PRODUCTOS

fetch("../json/auriculares.json")
.then((res) => res.json())
.then((data) => { 
  renderizarProductos(data);
  guardarProductosLS(data)
  actualizarCarrito();
});

guardarProductosLS();

// ver en Local Storage si hay un array "productos"  sino lo crea

function productosLS() {
    return JSON.parse(localStorage.getItem("productos")) || [];  
}

// Guardo productos en Local Storage

function guardarProductosLS(data)  {
    localStorage.setItem("productos" , JSON.stringify(data));
}


// Renderizo Productos en pagina principal 

function renderizarProductos(data) {
    let productos = data ;
    let contenido = "" ;
    
    for (let producto of productos) {
        contenido += `
            <div class="col-md-6 col-lg-3 g-1 ">
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



