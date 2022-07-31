//DECLARO LOS PRODUCTOS

fetch("../json/teclados.json")
.then((res) => res.json())
.then((data) => { 
  renderizarProductos(data);
  guardarProductosLS(data)
  actualizarCarrito();
});

guardarProductosLS();
