var deporte = [
  {
    titulo: "Producto 1",
    descripcion: "Descripción del producto 1",
    imagen: "img/modelo.jpg",
    categoria: "polos",
    precio: "S/20.00",
    stok: "stock"
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/modelo.jpg",
    categoria: "polos",
    precio: "S/20.00",
    stok: "stock"
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/modelo.jpg",
    categoria: "polos",
    precio: "S/20.00",
    stok: "stock"
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/modelo.jpg",
    categoria: "polos",
    precio: "S/20.00",
    stok: "stock"
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/modelo.jpg",
    categoria: "polos",
    precio: "S/20.00",
    stok: "stock"
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/modelo.jpg",
    categoria: "polos",
    precio: "S/20.00",
    stok: "stock"
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/modelo.jpg",
    categoria: "polos",
    precio: "S/20.00",
    stok: "stock"
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/modelo.jpg",
    categoria: "polos",
    precio: "S/20.00",
    stok: "stock"
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/modelo.jpg",
    categoria: "polos",
    precio: "S/20.00",
    stok: "stock"
  }
  // Agrega más productos aquí...
];

var container2 = document.getElementById("productos_containter2_deporte");

deporte.forEach(deport => {
  const li = document.createElement('li');
  li.innerHTML = `
    <div class="productopadre">
    <div class="producto">
    <img src="${deport.imagen}" alt="${deport.titulo}" class="producto-imagen">
    <h3 class="producto-titulo">${deport.titulo}</h3>
    <p class="categoriasss">${deport.categoria}</p>
    <p class="textoss">${deport.descripcion}</p>
    <p class="precio">${deport.precio}</p>
    <p class="stock">${deport.stok}</p>

  </div>
  </div>
      
    `;
  container2.appendChild(li);
});