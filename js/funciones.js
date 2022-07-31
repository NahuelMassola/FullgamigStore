
// ver en Local Storage si hay un array "carrito"  sino lo crea
function productosCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];  
}
// Guarda en Local Storage los Productos agregados al carrito

function guardarProductosCarrito(data)  {
    localStorage.setItem("carrito" , JSON.stringify(data));
}

// Buscar Productos

 function buscarProducto(id) {
    let productos = productosLS() ;
    return productos.find(x => x.id == id);
}

// Funcion agregar productos al carrito

 function agregarCarrito(id) {
    let productos_carrito = productosCarrito();
    let posicion = productos_carrito.findIndex(x => x.id == id);

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto Agregado',
        showConfirmButton: false,
        timer: 1000
      })

    if (posicion > -1) {
        productos_carrito[posicion].cantidad += 1;
    } else {
        let producto = buscarProducto(id);
        producto.cantidad = 1;
        productos_carrito.push (producto);
        
    } 
    
    guardarProductosCarrito(productos_carrito);
    actualizarCarrito();
    
}

// Agrega productos sin mostras sweetalert
function agregarCarrito1(id) {
    let productos_carrito = productosCarrito();
    let posicion = productos_carrito.findIndex(x => x.id == id);

    if (posicion > -1) {
        productos_carrito[posicion].cantidad += 1;
    } else {
        let producto = buscarProducto(id);
        producto.cantidad = 1;
        productos_carrito.push (producto);
        
    } 
    
    guardarProductosCarrito(productos_carrito);
    actualizarCarrito();
    
}

// funcion actualizar carrito, sino hay nada muestra 0 sino se incrementa cuando se carguen productos

function actualizarCarrito() {
    let producto1 = productosCarrito();
    let contenido = `<button type="button" class="btn position-relative">
    <img src="../img/carrito2.png" width="50px" >
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span> </button>` ;
   
    let total = 0 ;

    if (producto1.length > 0) {
        for (let producto of producto1) {
        total += producto.cantidad ;
        
    }

        contenido = `<button type="button" class="btn position-relative" title="Ver Carrito">
        <img src="../img/carrito2.png" width="50px" >
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
         ${total}</span> </button>` ;
        
    }

    document.getElementById("btn-carrito").innerHTML = contenido ;
 }


// Eliminaro Productos agregados al carrito

function eliminarProducto(id) {
    let productos_carrito = productosCarrito();
    let posicion = productos_carrito.findIndex(x => x.id == id);
    productos_carrito[posicion].cantidad -= 1 ;

    

    if (productos_carrito[posicion].cantidad == 0) {
        productos_carrito.splice(posicion , 1);
 
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Producto Eliminado',
            showConfirmButton: false,
            timer: 1000
          })
    } 
     
    guardarProductosCarrito(productos_carrito);
    actualizarCarrito();
    renderizarProductosCarrito();
}

// suma productos desde el + una vez que ya estan cargados al carrito 

function agregarCarritoSumado(id) {
    agregarCarrito1(id);
    renderizarProductosCarrito();
}

