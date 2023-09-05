const productos = [
{id:1, nombre:"Puerta Delantera Izquierda Peugeot 207 3p 2009" , precio: 35.000 , imagen:"../assets/img/PuertaDelIzqPeugeot2073p2009.png" },
{id:2, nombre:"Puerta Delantera Izquierda Fiat Mobi 5p 2018" , precio: 41.197 , imagen:"../assets/img/Puerta-del-izq-fiatMobis5p2018.png"},
{id:3, nombre:"Puerta Delantera Izquierda Citroen C4 4p 2008" , precio: 42.100 , imagen:"../assets/img/PuertaDel-Izq-Citroenc4-4p2008.png"},
{id:4, nombre:"Paragolpe Delantero Ford F100 92/96" , precio: 41.323 , imagen:"../assets/img/ParagolpeDelFordF100_92-96.png"},
{id:5, nombre:"Paragolpe Delantero Chevrolet S10 96/01" , precio: 36.408 , imagen:"../assets/img/ParagolpeDel.chevrolet-s10.png"},
{id:6, nombre:"Paragolpe Del. Vw Gol Trend-Voyage" , precio: 36.400 , imagen:"../assets/img/Paragolpe-del-VWgolTrend-voyage.png" },
{id:7, nombre:"Tapa De Baul Toyota Corolla 4p 2016" , precio: 70.000 , imagen:"../assets/img/TapaDeBaulToyotaCorolla4p2016.png"},
{id:8, nombre:"Tapa De Baul Citroen C4 4p 2009" , precio: 59.000 , imagen:"../assets/img/TapaDeBaulCitroenC4-$p2009.png"},
{id:9, nombre:"Tapa De Baul Renault Megane 4p 2010" , precio: 32.368 , imagen:"../assets/img/TapaDeBaulRenaultMEgane4p2010.png"},
];


//funcion para que al hacer click ,en el evento de la linea 39, el id con el objeto se guarde en el local storage 
const agregar = (id) =>{
    // Obtengo la lista de carrito del almacenamiento local, en mi caso estaba vacia por eso la funcion crea una nueva lista de productos en el almacenamiento local
    // Los simbolos || [] al final de la línea se utiliza para proporcionar un valor predeterminado en caso de que el valor almacenado en el almacenamiento local sea null. Si el valor almacenado es null, la expresión JSON.parse(localStorage.getItem("productosEnCarrito")) || [] devolverá un arreglo vacío ([]) en lugar de null.
    let productosEnCarrito = JSON.parse(localStorage.getItem("productosEnCarrito")) || [];
     // Busco el producto con el ID especificado
    let producto = productos.find((item) => item.id === id);
    // Agrego el producto a la lista de productos
    productosEnCarrito.push(producto);
    // Guardo la lista de productos en el almacenamiento local
    //Para guardar objetos y arreglos en el local storage se debe si o si convertir dicho objeto y arreglo a json con stringfy porque al convertirlo en string pesa menos ya que el almacenamiento local es muy pequeño.
    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
}

//funcion para eliminar del lcoal storage
const eliminar = (id) => {
    // Obtener la lista de productos del almacenamiento local
    let productosEnCarrito = JSON.parse(localStorage.getItem("productosEnCarrito")) || [];
    // Buscar el índice del producto que deseas eliminar en la lista de productos
    let index = productosEnCarrito.findIndex((item) => item.id === id);
    // Eliminar el producto de la lista utilizando el método splice
    if (index !== -1) {
        productosEnCarrito.splice(index, 1);
    }
    // Guardar la lista de productos actualizada en el almacenamiento local
    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
}


// Recupera la lista de productos del almacenamiento local
let productosEnCarrito = JSON.parse(localStorage.getItem("productosEnCarrito")) || [];



//mostramos los productos en el DOM
productos.forEach((item) => {
    let div= document.createElement("div");
    div.innerHTML = `
    <div class="boxProd">
        <img src="${item.imagen}">
        <h5>${item.nombre}</h5>
        <p>$${item.precio}</p>
        <button id="boton${item.id}"><h6>AGREGAR AL CARRITO</h6></button>
        <button id="eliminar${item.id}"><h6>ELIMINAR DEL CARRITO</h6></button>
    </div>
    `;
    //contenedorProductos es el div que yo tengo el en html de la pagina tienda en la linea 133...
    //yo creo la tarjeta con el createElement (linea 27 de este mismo archivo) y luego la muestro respetando la posicion 133 en el html
    contenedorProductos.append(div);
//me traigo el boton y con una fucnion hago que los reconozca 1 por 1
    let boton = document.getElementById(`boton${item.id}`);
    boton.addEventListener("click", () => agregar(item.id));
    let botonEliminar = document.getElementById(`eliminar${item.id}`);
    botonEliminar.addEventListener("click", () => eliminar(item.id));
});

//Este codigo comentado en las lineas de abajo son las cards que había realizado en /pages/tienda.html. Son los codigos de las cards que realice en desarrollo web que arriba las modifique con javascript.
    // <div class="ordenarProd">
    //                     <div class="boxProd">
    //                         <img src="../assets/img/PuertaDelIzqPeugeot2073p2009.png" alt="puerta">
    //                         <h5>Puerta Delantera Izquierda Peugeot 207 3p 2009</h5>
    //                         <p>$35.000</p>
    //                         <button onclick="agregarAlCarrito('Puerta Delantera Izquierda Peugeot 207 3p 2009', 35.000)"><h6>AGREGAR AL CARRITO</h6></button>
    //                     </div>
    //                     <div class="boxProd">
    //                         <img src="../assets/img/Puerta-del-izq-fiatMobis5p2018.png" alt="puerta">
    //                         <h5>Puerta Delantera Izquierda Fiat Mobi 5p 2018</h5>
    //                         <p>$41.197</p>
    //                         <button><a href="../pages/carrito.html"><h6>AGREGAR AL CARRITO</h6></a></button>
    //                     </div>
    //                     <div class="boxProd">
    //                         <img src="../assets/img/Puerta Del-Izq-Citroenc4-4p2008.png" alt="puerta">
    //                         <h5>Puerta Delantera Izquierda Citroen C4 4p 2008</h5>
    //                         <p>$42.100</p>
    //                         <button><a href="../pages/carrito.html"><h6>AGREGAR AL CARRITO</h6></a></button>
    //                     </div>
    //                     <div class="boxProd">
    //                         <img src="../assets/img/Puerta Del-Izq-Citroenc4-4p2008.png" alt="puerta">
    //                         <h5>Puerta Delantera Izquierda Citroen C4 4p 2008</h5>
    //                         <p>$42.100</p>
    //                         <button><a href="../pages/carrito.html"><h6>AGREGAR AL CARRITO</h6></a></button>
    //                     </div>
    //                     <div class="boxProd">
    //                         <img src="../assets/img/ParagolpeDelFordF100_92-96.png" alt="paragolpe">
    //                         <h5>Paragolpe Delantero Ford F100 92/96</h5>
    //                         <p>$41.323</p>
    //                         <button><a href="../pages/carrito.html"><h6>AGREGAR AL CARRITO</h6></a></button>
    //                     </div>
    //                     <div class="boxProd">
    //                         <img src="../assets/img/ParagolpeDel.chevrolet-s10.png" alt="paragolpe">
    //                         <h5>Paragolpe Delantero Chevrolet S10 96/01</h5>
    //                         <p>$36.408</p>
    //                         <button><a href="../pages/carrito.html"><h6>AGREGAR AL CARRITO</h6></a></button>
    //                     </div>
    //                     <div class="boxProd">
    //                         <img class="boxProdImg" src="../assets/img/Paragolpe-del-VWgolTrend-voyage.png" alt="paragolpe">
    //                         <h5 class="boxProdTitulo">Paragolpe Del. Vw Gol Trend-Voyage</h5>
    //                         <p>$36.400</p>
    //                         <button><a href="../pages/carrito.html"><h6>AGREGAR AL CARRITO</h6></a></button>
    //                     </div>
    //                     <div class="boxProd">
    //                         <img class="boxProdImg" src="../assets/img/Paragolpe-del-VWgolTrend-voyage.png" alt="paragolpe">
    //                         <h5 class="boxProdTitulo">Paragolpe Del. Vw Gol Trend-Voyage</h5>
    //                         <p>$36.400</p>
    //                         <button><a href="../pages/carrito.html"><h6>AGREGAR AL CARRITO</h6></a></button>
    //                     </div>
    //                     <div class="boxProd">
    //                         <img src="../assets/img/tapaDeBaulToyotaCorolla4p2016.png" alt="tapadebaultoyota">
    //                         <h5>Tapa De Baul Toyota Corolla 4p 2016</h5>
    //                         <p>$70.000</p>
    //                         <button><a href="../pages/carrito.html"><h6>AGREGAR AL CARRITO</h6></a></button>
    //                     </div>
    //                     <div class="boxProd">
    //                         <img src="../assets/img/TapaDeBaulCitroenC4-$p2009.png" alt="tapadebaulcitroen">
    //                         <h5>Tapa De Baul Citroen C4 4p 2009</h5>
    //                         <p>$59.900</p>
    //                         <button><a href="../pages/carrito.html"><h6>AGREGAR AL CARRITO</h6></a></button>
    //                     </div>
    //                     <div class="boxProd">
    //                         <img src="../assets/img/TapaDeBaulRenaultMEgane4p2010.png" alt="tapadebaulrenault">
    //                         <h5>Tapa De Baul Renault Megane 4p 2010</h5>
    //                         <p>$32.368</p>
    //                         <button><a href="../pages/carrito.html"><h6>AGREGAR AL CARRITO</h6></a></button>
    //                     </div>
    //                     <div class="boxProd">
    //                         <img src="../assets/img/TapaDeBaulRenaultMEgane4p2010.png" alt="tapadebaulrenault">
    //                         <h5>Tapa De Baul Renault Megane 4p 2010</h5>
    //                         <p>$32.368</p>
    //                         <button><a href="../pages/carrito.html"><h6>AGREGAR AL CARRITO</h6></a></button>
    //                     </div>
    //             </div>


   // SIMULAMOS UNA BASE DE DATOS DE LOS PRODUCTOS DE ARRIBA QUE ESTABAN EN EL HTML
   //el programa inicia aca creando storage con el array
// export const productos = [
//     {
//         id: 1,
//         nombre: "Sandalia Negra Tamagiu",
//         precio:"$13.500",
//         imagen: "../assets/img/PuertaDelIzqPeugeot2073p2009.png",
//         categoria: "Sandalias"
//     },
//     {
//         id: 2,
//         nombre: "Sandalia Plateada Becca Shoes Remi",
//         precio:"$24.900",
//         imagen: "../assets/img/becca-shoes-3.webp",
//         categoria: "Sandalias"
//     },
//     {
//         id: 3,
//         nombre: "Zapatilla Blanca Miss Rock Praga",
//         precio:"$6999",
//         imagen: "../assets/img/miss-rock.webp",
//         categoria: "zapatillas"
//     },
//     {
//         id: 4,
//         nombre: "Zueco Rosa Miss Rock Agus",
//         precio:"$11.699",
//         imagen: "../assets/img/miss-rock-1.webp",
//         categoria: "Suecos"
//     },
//     {
//         id: 5,
//         nombre: "Borcego de Cuero Negro Katekuba Montu",
//         precio:"$15.209",
//         imagen: "../assets/img/katekub.webp",
//         categoria: "Borcegos"
//     },
//     {
//         id: 6,
//         nombre: "Zapato Beige Vizzano",
//         precio:"$18.219",
//         imagen: "../assets/img/vizzano.webp",
//         categoria: "Zapatos"
//     },
//     {
//         id: 7,
//         nombre: "Bota Negra Becca Shoes Panama",
//         precio:"$49.990",
//         imagen: "../assets/img/becca-shoes.webp",
//         categoria: "Botas"
//     },

// ];

// //ESTOS PRODUCTOS INICIALMENTE ESTAN EN EL LOCAL STORAGE
// // MI PAGINA busca en el array si el producto esta en el storage, si no esta se crea y si esta lo obtiene
// JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));
