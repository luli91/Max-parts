// Primer entrega: Crear un algoritmo con un condicional 
// En este caso yo quiero que el cliente que quiera enviar un formulario llene todos los datos, si alguno de ellos esta vacio que salte un alert "Por favor, complete todos los campos antes de enviar el formulario.", si no que salte otro alert "La consulta se envió correctamente."
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    //Obtengo los datos ingresados por el cliente 
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("phone").value;
    let email = document.getElementById("Email").value;
    let mensaje = document.getElementById("message").value;

    if (nombre === "" || telefono === "" || email === "" || mensaje === "") {
        alert("Por favor, complete todos los campos antes de enviar el formulario.");
    } else {
        // Guardo los datos en localStorage
        localStorage.setItem('nombre', nombre);
        localStorage.setItem('telefono', telefono);
        localStorage.setItem('email', email);
        localStorage.setItem('mensaje', mensaje);

        alert("La consulta se envió correctamente.");

        // Limpiar los campos del formulario
        document.getElementById("nombre").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("message").value = "";
    }
});



