// Primer entrega: Crear un algoritmo con un condicional 
// En este caso yo quiero que el cliente que quiera enviar un formulario llene todos los datos, si alguno de ellos esta vacio que salte un alert "Por favor, complete todos los campos antes de enviar el formulario.", si no que salte otro alert "La consulta se envió correctamente."
const formularioProducto= ("#form-presu")

document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("phone").value;
    let email = document.getElementById("Email").value;
    let mensaje = document.getElementById("message").value;

    if (nombre === "" || telefono === "" || email === "" || mensaje === "") {
        alert("Por favor, complete todos los campos antes de enviar el formulario.");
    } else {
        alert("La consulta se envió correctamente.");
        // Enviar el formulario
    }
});

