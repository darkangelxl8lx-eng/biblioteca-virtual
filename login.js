// Obtener el formulario de login
const loginForm = document.getElementById('loginForm');

// Función para mostrar notificación
function mostrarNotificacion(mensaje, tipo) {
    const notificacion = document.getElementById('notificacion');
    notificacion.textContent = mensaje;
    notificacion.className = 'notificacion ' + tipo;
    notificacion.classList.add('mostrar');
    
    // Ocultar después de 3 segundos
    setTimeout(function() {
        notificacion.classList.remove('mostrar');
    }, 3000);
}

// Escuchar el evento cuando se envía el formulario
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener los valores de los inputs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Buscar el usuario en localStorage
    const passwordGuardada = localStorage.getItem(username);
    
    // Verificar si el usuario existe y la contraseña es correcta
    if (passwordGuardada && passwordGuardada === password) {
        mostrarNotificacion('✅ ¡Bienvenido ' + username + '!', 'exito');
        
        // Guardar sesión activa
        localStorage.setItem('sesionActiva', username);
        
        // Redirigir al catálogo después de 1.5 segundos
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 1500);
    } else {
        mostrarNotificacion('❌ Usuario o contraseña incorrectos.', 'error');
    }
});