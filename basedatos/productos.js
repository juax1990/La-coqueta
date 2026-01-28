/************ LISTA DE PRODUCTOS ************/
const lista_productos = [
  {
    codigo:"1000",
    nombre:"Pantalon Elegante",
    descripcion:"Hermosos pantalones para tus eventos ejecutivos",
    codigo_categoria:"9001",
    imagen:"img/pantalone.jpg",
    precio:"$27000",
    contenido:["XXXXXXXXX"]
  },
  {
    codigo:"1002",
    nombre:"Pantalon casual",
    descripcion:"Pantalones para tu día a día",
    codigo_categoria:"9001",
    imagen:"img/pantalonc.jpg",
    precio:"50000",
    contenido:["XXXXXXXXX"]
  },
  {
    codigo:"1003",
    nombre:"Jean ajustado",
    descripcion:"Jeans que se ajustan a tu figura",
    codigo_categoria:"9002",
    imagen:"img/jeana.jpg",
    precio:"10000",
    contenido:["Diseñamos tu catalogo de productos y servicios."]
  },
  {
    codigo:"1005",
    nombre:"Jean suelto",
    descripcion:"Jeans bota campana",
    codigo_categoria:"9002",
    imagen:"img/jeans.jpg",
    precio:"12000",
    contenido:["XXXXX"]
  },
  {
    codigo:"1006",
    nombre:"Blusa Casual",
    descripcion:"Blusas para tu día a día",
    codigo_categoria:"9003",
    imagen:"img/blusac.jpg",
    precio:"90000",
    contenido:["XXXX"]
  },
  {
    codigo:"1007",
    nombre:"Blusa elegante",
    descripcion:"Blusas para eventos ejecutivos",
    codigo_categoria:"9003",
    imagen:"img/blusae.jpg",
    precio:"10000",
    contenido:["XXXXX"]
  },
  {
    codigo:"1008",
    nombre:"Conjunto Casual",
    descripcion:"Hermosos conjuntos para tu día a día",
    codigo_categoria:"9004",
    imagen:"img/conjuntoc.jpg",
    precio:"13000",
    contenido:["XXXX"]
  },
  {
    codigo:"1009",
    nombre:"Conjunto Elegante",
    descripcion:"Hermosos conjuntos para eventos especiales",
    codigo_categoria:"9004",
    imagen:"img/conjuntoe.jpeg",
    precio:"13000",
    contenido:["XXXX"]
  },
  {
    codigo:"1012",
    nombre:"Vestido casual",
    descripcion:"Hermosos vestidos para tu día a día",
    codigo_categoria:"9008",
    imagen:"img/vestidoc.jpg",
    precio:"13000",
    contenido:["XXXX"]
  },
  {
    codigo:"1013",
    nombre:"Vestido elegante",
    descripcion:"Hermosos vestidos para eventos especiales",
    codigo_categoria:"9008",
    imagen:"img/vestidoe.jpg",
    precio:"13000",
    contenido:["XXXX"]
  },
  {
    codigo:"1010",
    nombre:"Camisetas Casuales",
    descripcion:"Hermosas camisetas para tu día a día",
    codigo_categoria:"9005",
    imagen:"img/camisetac.jpeg",
    precio:"13000",
    contenido:["XXXX"]
  },
  {
    codigo:"1011",
    nombre:"Camisa elegante",
    descripcion:"Hermosa camisa para evengtos espaciales",
    codigo_categoria:"9005",
    imagen:"img/camisae.jpg",
    precio:"13000",
    contenido:["XXXX"]
  }
];

/************ FILTRAR POR CATEGORÍA ************/
function obtenerProductosServicios(categoria) {
  if (!categoria) return lista_productos;
  return lista_productos.filter(p => p.codigo_categoria === categoria);
}

document.addEventListener("DOMContentLoaded", () => {

  const contenedor = document.getElementById("etiqueta_productos");
  if (!contenedor) return;

  const categoria = new URLSearchParams(window.location.search).get("cat");
  const productos = obtenerProductosServicios(categoria);

  contenedor.innerHTML = "";

  productos.forEach(producto => {

    const col = document.createElement("div");
    col.className = "col-lg-4 col-md-6 col-sm-12 pb-1";

    col.innerHTML = `
      <div class="card product-item border-0 mb-4">
        <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
          <img class="img-fluid w-100" src="${producto.imagen}" alt="${producto.nombre}">
        </div>

        <div class="card-body text-center pt-4 pb-3">
          <h6 class="text-truncate mb-2">${producto.nombre}</h6>
          <p class="small px-2">${producto.descripcion}</p>
          <h6>$${producto.precio.toLocaleString("es-CO")}</h6>
        </div>

        <div class="card-footer d-flex justify-content-between bg-light border">
          <a href="detalle_producto.html?codigo=${producto.codigo}" class="btn btn-sm text-dark p-0">
            <i class="fas fa-eye text-primary mr-1"></i>Detalle
          </a>
          <button class="btn btn-sm text-dark p-0 btn-add">
            <i class="fas fa-shopping-cart text-primary mr-1"></i>Agregar
          </button>
        </div>
      </div>
    `;

    contenedor.appendChild(col);
  });
});
