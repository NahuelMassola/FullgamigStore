//DECLARO LOS PRODUCTOS

fetch("../json/placas.json")
.then((res) => res.json())
.then((data) => { 
  renderizarProductos(data);
  guardarProductosLS(data)
  actualizarCarrito();
});

guardarProductosLS();