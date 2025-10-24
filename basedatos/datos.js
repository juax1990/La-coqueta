
//Lista que contiene los elementos que se van a mostrar en el carrusel de la pagina principal
const elementos_carrusel = [
    {nombre:"Diseño Grafico", 
    descripcion:"Elaboramos y creamos el diseño de tu marca, como la creación de logo, manuales corporativos, diseños y catálogos para que muestres tus productos o servicios.",
    imagen:"img/brochure.png"},
    {nombre:"Social media", 
    descripcion:"Diseñamos tus post, stories para el feed de tus redes sociales para que se vea de una forma atractiva y corporativa.",
    imagen:"img/redes-divine.jpg"},
    {nombre:"P.O.P", 
    descripcion:"Aplicamos tu marca a diferentes piezas publicitarias obteniendo espectaculares resultados en avisos, habladores QR, señalética y muchos más.",
    imagen:"img/aa3d.jpg"},
    {nombre:"Papeleria comercial", 
    descripcion:"Diseñamos e imprimimos la papelería comercial de tu empresa, incluyendo talonarios, hojas membretadas, tarjetas de presentación y más.",
    imagen:"img/2.jpg"},
]

const lista_categorias = [
    { codigo_categoria: "9001", nombre: "Avisos publicitarios",imagen:"img/atb.png", descripcion:"Aviso exterior o inferior, el cual puede tener luces, echo en diferentes materiales como acrilico, lona y mas" },
    { codigo_categoria: "9002", nombre: "Pines", imagen:"img/pines.jpg", descripcion:"Formas en acrilico ideales para destacar tu trabajo de uñas" },
    { codigo_categoria: "9003", nombre: "Catálogos", imagen:"img/cmp.jpg", descripcion:"Diseñamos tu catalogo de productos y servicios." },
    { codigo_categoria: "9004", nombre: "Diseño textil", imagen:"img/diseno-textil-1.png", descripcion:"Diseñamos productos textiles acorde a tus colores y misión." },
    { codigo_categoria: "9006", nombre: "Señalética", imagen:"img/senal.jpg", descripcion:"Señales de abierto cerrado, etc" },
    { codigo_categoria: "9007", nombre: "Habladores QR", imagen:"img/hablador.jpg", descripcion:"Hablador que facilita a tu cliente pagar de manera correcta." },
];



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