// Obtener el formulario de registro
const registroForm = document.getElementById('registroForm');

// Función para mostrar notificación
function mostrarNotificacion(mensaje, tipo) {
    const notificacion = document.getElementById('notificacion');
    notificacion.textContent = mensaje;
    notificacion.className = 'notificacion ' + tipo; // 'exito' o 'error'
    notificacion.classList.add('mostrar');
    
    // Ocultar después de 3 segundos
    setTimeout(function() {
        notificacion.classList.remove('mostrar');
    }, 3000);
}

// Escuchar el evento cuando se envía el formulario
registroForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener los valores de los inputs
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    
    // Verificar si el usuario ya existe en localStorage
    const usuarioExistente = localStorage.getItem(username);
    
    if (usuarioExistente) {
        mostrarNotificacion('❌ Este usuario ya existe. Elige otro.', 'error');
        return;
    }
    
    // Guardar el usuario y contraseña en localStorage
    localStorage.setItem(username, password);
    
    // Mensaje de éxito
    mostrarNotificacion('✅ ¡Registro exitoso! Redirigiendo...', 'exito');
    
    // Redirigir a la página de login después de 1.5 segundos
    setTimeout(function() {
        window.location.href = 'login.html';
    }, 1500);
});