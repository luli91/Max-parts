// Crear un algoritmo utilizando un cliclo

const intentosMaximos = 3;
let intentos = 0;
let codigoIngresado = '';
const codigoValido = "AUTOPARTES20";
let codigoValidoIngresado = false;

for (intentos = 0; intentos < intentosMaximos && !codigoValidoIngresado; intentos++) {
    codigoIngresado = prompt("Ingresa el código de descuento:");
    if (codigoIngresado === codigoValido) {
    alert("¡Código válido! Has obtenido un 20% de descuento en tu compra.");
    codigoValidoIngresado = true;
    } else {
    alert("Código incorrecto. Inténtalo de nuevo.");
    }
}

if (!codigoValidoIngresado) {
    alert("Lo siento, has agotado tus intentos. No has obtenido el descuento.");
}

function agregarAlCarrito(nombre, precio) {
    // Agregar el producto al carrito
    // ...
    alert(nombre + ' ha sido agregado al carrito');
    }