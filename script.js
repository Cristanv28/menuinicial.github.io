document.getElementById("perfil-form").addEventListener("submit", function(event) {
    const email = document.getElementById("correo").value;
    const password = document.getElementById("password").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validar correo electrónico
    if (!emailPattern.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        event.preventDefault();
    }

    // Validar longitud de contraseña
    if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        event.preventDefault();
    }
});

// Mostrar/Ocultar contraseña
document.getElementById("showPassword").addEventListener("click", function() {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});

document.getElementById("acceso-form").addEventListener("submit", function(event) {
    const emailAcceso = document.getElementById("email-acceso").value;
    const passwordAcceso = document.getElementById("password-acceso").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validar correo electrónico
    if (!emailPattern.test(emailAcceso)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        event.preventDefault();
    }

    // Validar longitud de contraseña
    if (passwordAcceso.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        event.preventDefault();
    }

    // Aquí se puede añadir lógica adicional para verificar las credenciales con un servidor
    alert("Acceso concedido. Redirigiendo a la sección de Servicios.");
    // Aquí podrías redirigir a la sección de servicios o mostrarla
    document.getElementById("servicios").scrollIntoView({ behavior: 'smooth' });
});

// Mostrar/Ocultar contraseña
document.getElementById("showPasswordAcceso").addEventListener("click", function() {
    const passwordField = document.getElementById("password-acceso");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});

function irAlMenu() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
