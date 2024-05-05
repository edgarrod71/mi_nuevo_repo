function limpiaErrores() {
    var errorNombre = document.getElementById("error-nombre");
    var errorEmail = document.getElementById("error-email");
    var errorAsunto = document.getElementById("error-asunto");
    var errorMensaje = document.getElementById("error-message");

    errorNombre.textContent = "";
    errorEmail.textContent = "";
    errorAsunto.textContent = "";
    errorMensaje.textContent = "";
}

function validarFormulario() {
    var nombre = document.getElementById("first_name").value;
    var errorNombre = document.getElementById("error-nombre");
    var email = document.getElementById("email").value;
    var errorEmail = document.getElementById("error-email");
    var asunto = document.getElementById("subject").value;
    var errorAsunto = document.getElementById("error-asunto");
    var mensaje = document.getElementById("message").value;
    var errorMensaje = document.getElementById("error-message");

    limpiaErrores(); 
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre.trim() === "") {
        errorNombre.textContent = "El Nombre no debe estar en blanco ni vacío.";
        return false;
    } else

    if (asunto.trim() === "") {
        errorAsunto.textContent = "El Asunto no debe estar en blanco ni vacío.";
        return false;
    } else

    if (email.trim() === "") {
        errorEmail.textContent = "El Correo no debe estar en blanco ni vacío.";
        return false;
    } else
 
    if (!regex.test(email)) {
        errorEmail.textContent = "El correo electrónico no es válido.";
        return false;
    } else
 
    if (mensaje.trim() === "") {
        errorMensaje.textContent = "El Mensaje no debe estar en blanco ni vacío.";
        return false;
    } else
  
    if (nombre.length > 50) {
        errorNombre.textContent = "El Nombre debe tener máximo 50 caracteres.";
        return false;
    } else

    if (nombre.length > 50) {
        errorAsunto.textContent = "El Asunto no puede pasar de 50 caracteres";
        return false;
    } else

    if (mensaje.length > 300) {
        errorMensaje.textContent = "";
        return false;
    }

    limpiaErrores();
 
    return true;
}

document.getElementById("first_name").addEventListener("blur", validarFormulario);
document.getElementById("email").addEventListener("blur", validarFormulario);
document.getElementById("message").addEventListener("blur", validarFormulario);
document.getElementById("subject").addEventListener("blur", validarFormulario);

