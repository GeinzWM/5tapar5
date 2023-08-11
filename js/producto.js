var productos2 = [
  {
    titulo: "Producto 1",
    descripcion: "Descripción del producto 1",
    imagen: "img/delantera1.png",
    categoria: "polos",
    precio:"S/20.00",
    stok:"stock"
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/trasera1.png",
    categoria: "polos",
    precio:"S/20.00",
    stok:"stock"
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/modelo.jpg",
    categoria: "polos",
    precio:"S/20.00",
    stok:"stock"
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/modelo.jpg",
    categoria: "polos",
    precio:"S/20.00",
    stok:"stock"
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/modelo.jpg",
    categoria: "polos",
    precio:"S/20.00",
    stok:"stock"
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/modelo.jpg",
    categoria: "polos",
    precio:"S/20.00",
    stok:"stock"
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/modelo.jpg",
    categoria: "polos",
    precio:"S/20.00",
    stok:"stock"
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/modelo.jpg",
    categoria: "polos",
    precio:"S/20.00",
    stok:"stock"
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/modelo.jpg",
    categoria: "polos",
    precio:"S/20.00",
    stok:"stock"
  }
  // Agrega más productos aquí...
];

var container2 = document.getElementById("productos_containter2");

productos2.forEach(producto => {
  const li = document.createElement('li');
  li.innerHTML = `
    <div class="productopadre">
    <div class="producto">
    <img src="${producto.imagen}" alt="${producto.titulo}" class="producto-imagen">
    <h3 class="producto-titulo">${producto.titulo}</h3>
    <p class="categoriasss">${producto.categoria}</p>
    <p class="textoss">${producto.descripcion}</p>
    <p class="precio">${producto.precio}</p>
    <p class="stock">${producto.stok}</p>

  </div>
  </div>
      
    `;
  container2.appendChild(li);
});