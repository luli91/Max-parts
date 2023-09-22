const productos = [
    {id:1, nombre:"Puerta Delantera Izquierda Peugeot 207 3p 2009" , precio: 35.999 , imagen:"../assets/img/PuertaDelIzqPeugeot2073p2009.png" },
    {id:2, nombre:"Puerta Delantera Izquierda Fiat Mobi 5p 2018" , precio: 41.197 , imagen:"../assets/img/Puerta-del-izq-fiatMobis5p2018.png"},
    {id:3, nombre:"Puerta Delantera Izquierda Citroen C4 4p 2008" , precio: 42.999 , imagen:"../assets/img/PuertaDel-Izq-Citroenc4-4p2008.png"},
    {id:4, nombre:"Paragolpe Delantero Ford F100 92/96" , precio: 41.323 , imagen:"../assets/img/ParagolpeDelFordF100_92-96.png"},
    {id:5, nombre:"Paragolpe Delantero Chevrolet S10 96/01" , precio: 36.408 , imagen:"../assets/img/ParagolpeDel.chevrolet-s10.png"},
    {id:6, nombre:"Paragolpe Del. Vw Gol Trend-Voyage" , precio: 36.405 , imagen:"../assets/img/Paragolpe-del-VWgolTrend-voyage.png" },
    {id:7, nombre:"Tapa De Baul Toyota Corolla 4p 2016" , precio: 70.719 , imagen:"../assets/img/TapaDeBaulToyotaCorolla4p2016.png"},
    {id:8, nombre:"Tapa De Baul Citroen C4 4p 2009" , precio: 59.548 , imagen:"../assets/img/TapaDeBaulCitroenC4-$p2009.png"},
    {id:9, nombre:"Tapa De Baul Renault Megane 4p 2010" , precio: 32.168 , imagen:"../assets/img/TapaDeBaulRenaultMEgane4p2010.png"},
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
    // Actualiza el contador en el botón "Ver carrito"
    document.getElementById('contador-carrito').textContent = productosEnCarrito.length;
    
    // Genera el HTML para los productos en el carrito( aca se ven los productos seleccionados)
    let htmlDelCarrito = '';
    let totalDelCarrito = 0;
    for (let producto of productosEnCarrito) {
        htmlDelCarrito += `<p><img src="${producto.imagen}" alt="${producto.nombre}"style="width: 50px; height: 50px;">${producto.nombre}: $${producto.precio}</p>`;
        totalDelCarrito += producto.precio;
    }
    htmlDelCarrito += `<p> Total a pagar: <span id="total-amount">${totalDelCarrito}</span> $</p>
        <button id="checkout-btn"> COMPRAR</button>
        <div id="button-checkout"></div>`
        let carritoDiv = document.getElementById('carrito');
        carritoDiv.style.backgroundColor = "#071E3D";
        carritoDiv.style.color = "white";
        carritoDiv.style.fontFamily = "'Lora', serif";
        carritoDiv.style.paddingLeft = "10px";
        carritoDiv.innerHTML = htmlDelCarrito;
    // Y asigna ese HTML al div del carrito
    document.getElementById('carrito').innerHTML = htmlDelCarrito;

    //Sweet alert
    Swal.fire(
        '¡Buen trabajo!',
        '¡Agregaste  el producto al carrito!',
        'success'
    );
}

//funcion para eliminar del lcoal storage
// const eliminar = (id) => {
//     // Obtener la lista de productos del almacenamiento local
//     let productosEnCarrito = JSON.parse(localStorage.getItem("productosEnCarrito")) || [];
//     // Busco el índice del producto que quiero eliminar en la lista de productos
//     let index = productosEnCarrito.findIndex((item) => item.id === id);
//     // Eliminar el producto de la lista utilizando el método splice
//     if (index !== -1) {
//         productosEnCarrito.splice(index, 1);
//     }
//     // Guardar la lista de productos actualizada en el almacenamiento local
//     localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
// }

const favorito = (id) =>{
//productos.forEach = ((item) =>{
    // let botonFavorito = document.getElementById(`favoritos${item.id}`);
    // botonFavorito.addEventListener("click", () => {
        // Obtener la lista de productos favoritos del almacenamiento local
        let productosFavoritos = JSON.parse(localStorage.getItem("productosFavoritos")) || [];
        //console.log("Productos favoritos:", productosFavoritos);
        // Buscar el índice del producto en la lista de productos favoritos
        let index = productosFavoritos.findIndex((item) => item.id === id);
        let botonFavorito = document.getElementById(`favoritos${id}`);
        // Si el producto ya está en la lista de favoritos, eliminarlo
        if (index !== -1) {
            productosFavoritos.splice(index, 1);
            botonFavorito.classList.remove('favorito-activo');
        } else {
            // Si el producto no está en la lista de favoritos, agregarlo
            let productoSeleccionado = productos.find((item) => item.id === id);
            productosFavoritos.push(productoSeleccionado);
            botonFavorito.classList.add('favorito-activo');
        }
        // Guardo la lista de productos favoritos actualizada en el almacenamiento local
        localStorage.setItem("productosFavoritos", JSON.stringify(productosFavoritos));
    }
    
//mostramos los productos en el DOM
productos.forEach((item) => {
    let div= document.createElement("div");
    div.innerHTML = `
    <div class="boxProd">
        <button class="favorito" id="favoritos${item.id}"><i class="material-icons">star</i></button>
        <img src="${item.imagen}">
        <h5 id="product-description" >${item.nombre}</h5>
        <p id="unit-price">$${item.precio}</p>
        <button class="botonAgregar" id="boton${item.id}"><h6>AGREGAR AL CARRITO</h6></button>
        
    </div>
    `;

    //contenedorProductos es el div que yo tengo el en html de la pagina tienda en la linea 133...
    //yo creo la tarjeta con el createElement (linea 27 de este mismo archivo) y luego la muestro respetando la posicion 133 en el html
    contenedorProductos.append(div);
//me traigo el boton y con una fucnion hago que los reconozca 1 por 1
    let botonAgregar = document.getElementById(`boton${item.id}`);
    botonAgregar.addEventListener("click", () => agregar(item.id));
    let botonfavorito = document.getElementById(`favoritos${item.id}`);
    botonfavorito.addEventListener("click", () => favorito(item.id));
});
    
//este codigo es para que al apretar el boton ver carrito se vean los productos que seleccione
document.getElementById('ver-carrito').addEventListener('click', () => {
    let carrito = document.getElementById('carrito');
    if (carrito.style.display === 'none') {
        carrito.style.display = 'block';
    } else {
        carrito.style.display = 'none';
    }
});


//NO ME FUNCIONA  EL CODIGO DE MERCADOPAGO :(
// //CODIGO DE MERCADOPAGO
// const mp = new MercadoPago('TEST-57e95b10-4f5a-4dee-b770-e8e1334f1f93', {
//     locale: 'es-AR' // The most common are: 'pt-BR', 'es-AR' and 'en-US'
// });
// //peticion POST al servidor
// document.getElementById("checkout-btn").addEventListener("click", function () {
// //orden de compra
//     const orderData = {
//         quantity: document.getElementById("quantity").value,
//         description: document.getElementById("product-description").innerHTML,
//         price: document.getElementById("unit-price").innerHTML
//     };
// // una vez que tenemos la orden de compra se envia al servidor
// fetch("http://localhost:8080/create_preference", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     // Aca envío al servidor la información sobre los productos que el usuario quiere comprar
//     body: JSON.stringify(orderData),
// })
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (preference) {
//         createCheckoutButton(preference.id);

//         $(".shopping-cart").fadeOut(500);
//         setTimeout(() => {
//         $(".container_payment").show(500).fadeIn();
//         }, 500);
//     })
//     .catch(function () {
//         alert("Unexpected error");
//         $('#checkout-btn').attr("disabled", false);
//     });
// });
// function createCheckoutButton(preferenceId) {
//     // Initialize the checkout
//     const bricksBuilder = mercadopago.bricks();

//     const renderComponent = async (bricksBuilder) => {
//         if (window.checkoutButton) window.checkoutButton.unmount();
//         await bricksBuilder.create(
//         'wallet',
//         'button-checkout', // class/id where the payment button will be displayed
//         {
//             initialization: {
//             preferenceId: preferenceId
//             },
//             callbacks: {
//             onError: (error) => console.error(error),
//             onReady: () => {}
//             }
//         }
//         );
//     };
//     window.checkoutButton =  renderComponent(bricksBuilder);
// }

//   // Handle price update
// function updatePrice() {
//     let quantity = document.getElementById("quantity").value;
//     let unitPrice = document.getElementById("unit-price").innerHTML;
//     let amount = parseInt(unitPrice) * parseInt(quantity);

//     document.getElementById("cart-total").innerHTML = "$ " + amount;
//     document.getElementById("summary-price").innerHTML = "$ " + unitPrice;
//     document.getElementById("summary-quantity").innerHTML = quantity;
//     document.getElementById("summary-total").innerHTML = "$ " + amount;
// }

//     document.getElementById("quantity").addEventListener("change", updatePrice);
//     updatePrice();

//   // Go back
//     document.getElementById("go-back").addEventListener("click", function () {
//     $(".container_payment").fadeOut(500);
//     setTimeout(() => {
//         $(".shopping-cart").show(500).fadeIn();
//     }, 500);
//     $('#checkout-btn').attr("disabled", false);
// });



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


