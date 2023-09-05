// import { comprarProducto } from "./carrito.js"

// const divProductos = document.getElementById("productos")

// let productosDisponibles = JSON.parse(localStorage.getItem("productos"))

// document.addEventListener("DOMContentLoaded", () => {
//     generarCardsProductos(productosDisponibles)
// })

// export const generarCardsProductos = (productos) => {
//    divProductos.innerHTML="";

//     productos.forEach((producto) => {
//         // const {imagen, nombre, categoria, precio, id} = producto

//         let card = document.createElement ("div");

//         card.className = "producto";
//         card.innerHTML = `
//         <div class="card" style="width: 18rem;">
//         <img class="card-img-top" src="${producto.imagen}" alt="card image cap">
//         <div class="card-body">
//         <p class="card-title">${producto.nombre}</p>
//         <p class="card-text">Categoria: ${producto.categoria}</p>
//         <p class="card-text">Precio <b>$${producto.precio}</b></p>
//         <button id="comprar$${producto.id}" class="btn btn-primary">comprar</button>
//         </div>
//         </div>`;

//         divProductos.appendChild(card);

//         const btnComprar = document.getElementById(`btn${id}`)
//         btnComprar.addEventListener("click", () => comprarProducto(id))

//     });
// };

