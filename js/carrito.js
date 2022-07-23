
// Renderizo los productos agregados al carrito
function renderizarProductosCarrito() {
    let productos = productosCarrito () ;
    let contenido = `
        <div class="container">
            <p class="alert alert-warning text-center col-md-6 offset-md-3" role="alert">No hay productos seleccionados</p>
        </div>
        `;
    

    if (productos != "") {
        
        contenido = `
        <div class="container">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col" class="align-middle text-center">Imagen</th>
                    <th scope="col" class="align-middle text-center">Descripción</th>
                    <th scope="col" class="align-middle text-center">Precio Unitario</th>
                    <th scope="col" class="align-middle text-center">Cantidad</th>
                    <th scope="col" class="align-middle text-center">Total</th>
                    </tr>
                </thead>
        `; 
    
        let total = 0;
        let totalItems = 0;
        
        for (let producto of productos) {
            let precio = producto.precio * producto.cantidad;
            contenido += `
                <tr>
                    <td><img src="../img/${producto.imagen}" clas="card-img" width="75px"></td>
                    <td class=" align-middle text-center" ><h4>${producto.nombre}</h4></td>
                    <td class="align-middle text-center"><h4>$${producto.precio}</h4></td>
                    <td class="align-middle text-center"><a href="#" class="btn btn-secondary" onclick="agregarCarritoSumado(${producto.id})">+</a><b> ${producto.cantidad} </b><a href="" class="btn btn-secondary" onclick="eliminarProducto(${producto.id})">-</a></td>
                   <td class="align-middle text-center" ><h4> Total: $ ${precio}</h4></td>
                    </tr>
            `;
            total += precio;
            totalItems += producto.cantidad;
            
        }
        
        contenido += `
            <tr class="alert alert-success" role="alert">
                <td class="align-middle text-center" colspan="2"><b>TOTAL A PAGAR</b></td>
                <td>&nbsp;</td> 
                <td class="align-middle text-center">${totalItems} productos</td>
                <td class="align-middle text-center"><h3><b>$ ${total}</b></h3></td>
            </tr>
            <tr>
                <td class="text-end" colspan="5"><a href="./formulariocompra.html" class="btn btn-success">Finalizar compra</a></td>
            </tr>
        `

        contenido += `
            </table>
                <p class="text-end">
                    <a href="#" class="btn btn-warning py-10" onclick="vaciarCarrito()" title="Vaciar Carro">Vaciar Carro
                        <i class="fa-solid fa-trash-can"></i>
                    </a>
                </p>
        </div>
        `
    }

    if ( document.getElementById("productos_carrito")) {
    document.getElementById("productos_carrito").innerHTML = contenido ;
    }
}

function vaciarCarrito(){
    Swal.fire({
        title: 'Estás seguro de vaciar el carro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, vaciar el carro',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {

            localStorage.removeItem("carrito");
            actualizarCarrito();
            renderizarProductosCarrito();

          Swal.fire(
            'Carro eliminado!',
            'Tu carro de compras está vacío',
            'success'
          )
        }
      })
}

actualizarCarrito();
renderizarProductosCarrito();



