//DECLARO LOS PRODUCTOS

fetch("../json/pc.json")
.then((res) => res.json())
.then((data) => { 
  renderizarProductos(data);
  guardarProductosLS(data)
  actualizarCarrito();
});

guardarProductosLS();

