//DECLARO LOS PRODUCTOS

fetch("../json/mouse.json")
.then((res) => res.json())
.then((data) => { 
  renderizarProductos(data);
  guardarProductosLS(data)
  actualizarCarrito();
});

guardarProductosLS();





