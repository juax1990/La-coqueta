
//Lista que contiene los elementos que se van a mostrar en el carrusel de la pagina principal
const elementos_carrusel = [
    {nombre:"Jeans", 
    descripcion:"Hermosos Jeans que se ajiustan perfectamente a tu figura",
    imagen:"img/1.png"},
    {nombre:"Conjuntos", 
    descripcion:"Variedad de conjuntos para que puedas elegir el adecuado para ti",
    imagen:"img/2.png"},
    {nombre:"Camisetas", 
    descripcion:"Necesitas un look deportivo, aqui puedes elegir tu color y estilo favorito",
    imagen:"img/3.png"},
    {nombre:"Hermosas Blusas", 
    descripcion:"Blusas para todas las ocasiones, desde un evento formal hasta casuales.",
    imagen:"img/4.png"},
    {nombre:"Metodos de financiación", 
    descripcion:"Blusas para todas las ocasiones, desde un evento formal hasta casuales.",
    imagen:"img/addi.jpg"},
]

const lista_categorias = [
    { codigo_categoria: "9001", nombre: "Jeans",imagen:"img/jean.jpg"},
    { codigo_categoria: "9002", nombre: "Conjuntos", imagen:"img/conjuntos.jpeg" },
    { codigo_categoria: "9003", nombre: "Accesorios", imagen:"img/accesorios.jpg" },
    { codigo_categoria: "9004", nombre: "Hermosas Blusas", imagen:"img/blusas.jpg" },
    { codigo_categoria: "9006", nombre: "Camisetas", imagen:"img/camisetas.jpg" },
    { codigo_categoria: "9007", nombre: "Vestidos", imagen:"img/vestidos.jpg" },
];

const lista_ofertas = [
    {
        imagen: "img/vestidoderecho.jpg",
        porcentaje: "20%",
        titulo: "Últimas tallas",
        boton: "Aprovecha",
        enlace: "#",
        alineacion: "right" // right | left
    },
    {
        imagen: "img/vestidoizquierdo.jpeg",
        porcentaje: "20%",
        titulo: "Últimas tallas",
        boton: "Aprovecha",
        enlace: "#",
        alineacion: "left"
    }
];


const lista_moda = [
    {codigo:"1000", nombre:"Pantalon Elegante", codigo_categoria:"9001",
    imagen:"img/pantalone.jpg", precio:"27000" },
    {codigo:"1002", nombre:"Pantalon Casual", codigo_categoria:"9001",
    imagen:"img/pantalonc.jpg", precio:"50000", },
    {codigo:"1003", nombre:"Jean", codigo_categoria:"9002",
    imagen:"img/jeana.jpg", precio:"10000", },
    {codigo:"1005", nombre:"Jean suelto", codigo_categoria:"9002",
    imagen:"img/jeans.jpg", precio:"150000", },
    {codigo:"1006", nombre:"Blusa Casual", codigo_categoria:"9003",
    imagen:"img/blusac.jpg", precio:"10000", },
    {codigo:"1007", nombre:"Blusa Elegante", codigo_categoria:"9003",
    imagen:"img/blusae.jpg", precio:"13000", },
    {codigo:"1008", nombre:"Conjunto Casual", codigo_categoria:"9004",
    imagen:"img/conjuntoc.jpg", precio:"27000", },
    {codigo:"1009", nombre:"Conjunto Elegante", codigo_categoria:"9004",
    imagen:"img/conjuntoe.jpeg", precio:"50000", },
    {codigo:"1010", nombre:"Camiseta Casual", codigo_categoria:"9005",
    imagen:"img/camisetac.jpeg", precio:"10000", },
    {codigo:"1011", nombre:"Camisa Elegante", codigo_categoria:"9006",
    imagen:"img/camisae.jpg", precio:"12000", },
    {codigo:"1012", nombre:"Vestidos Casuales", codigo_categoria:"9007",
    imagen:"img/vestidoc.jpg", precio:"90000", },
    {codigo:"1013", nombre:"Vestidos Elegantes", codigo_categoria:"9007",
    imagen:"img/vestidoe.jpg", precio:"10000", },
    {codigo:"1014", nombre:"Bolsos Casuales", codigo_categoria:"9008",
    imagen:"img/bolsoc.jpeg", precio:"13000", },
    {codigo:"1015", nombre:"Bolsos Elegantes", codigo_categoria:"9008",
    imagen:"img/bolsoe.jpg", precio:"10000", },
    {codigo:"1016", nombre:"Accesorios Elegantes", codigo_categoria:"9009",
    imagen:"img/accesoriose.jpg", precio:"13000", },
    {codigo:"1017", nombre:"Hermosos Bodys", codigo_categoria:"9010",
    imagen:"img/body.jpg", precio:"13000", },
]

const lista_productos = [
    {codigo:"1000", nombre:"Aviso tipo boton", 
    descripcion:"Aviso circular en la que destaca tu marca y decora los espacios de tu local.", codigo_categoria:"9001",
    imagen:"img/atb.png", precio:"27000", contenido:["Material: Acrílico","Medidas: 40x40cm","Iluminación opcional"]},
    {codigo:"1002", nombre:"Pines", 
    descripcion:"Ideal para mostrar el diseño de uñas.", codigo_categoria:"9002",
    imagen:"img/pines.jpg", precio:"50000", contenido:["Formas en acrillico para mostrar el diseño de tus uñas"]},
    {codigo:"1003", nombre:"Diseño de catalogo", 
    descripcion:"Diseñamos tu catalogo de productos y servicios.", codigo_categoria:"9003",
    imagen:"img/cmp.jpg", precio:"10000", contenido:["Diseñamos tu catalogo de productos y servicios."]},
    {codigo:"1004", nombre:"Diseño textil", 
    descripcion:"Diseñamos productos textiles acorde a tus colores y misión.", codigo_categoria:"9004",
    imagen:"img/diseno-textil-1.png", precio:"12000", contenido:["Diseñamos productos textiles acorde a tus colores y misión."]},
    {codigo:"1005", nombre:"Aviso caja luminosa", 
    descripcion:"Aviso externo con iluminación que hara resaltar tu negocio.", codigo_categoria:"9001",
    imagen:"img/cl.png", precio:"90000", contenido:["Caja luminosa en diferentes materiales para hacer resaltar tu aviso tanto de dia como en la noche"]},
    {codigo:"1006", nombre:"Señaletica", 
    descripcion:"Señales de abierto cerrado.", codigo_categoria:"9006",
    imagen:"img/senal.jpg", precio:"10000", contenido:["Señales de reglamento para tu negocio, abierto y cerrado, salidas de emergencia, indicadores de cuertos"]},
    {codigo:"1007", nombre:"Habladores QR", 
    descripcion:"QR con tu numero de cuenta.", codigo_categoria:"9007",
    imagen:"img/hablador.jpg", precio:"13000", contenido:["Hablador que facilita a tu cliente pagar de manera correcta."]},
]
// Lista que representa el carrito de compras del usuario

let carrito = [];