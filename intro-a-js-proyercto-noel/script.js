document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loginStatus = document.getElementById("loginStatus");
  
    // Verificación de credenciales 
    loginStatus.textContent = "Iniciando sesión...";
    loginStatus.style.color = "black"; // Restablece el color del mensaje
  
    // Simulación de inicio de sesión exitoso después de 2 segundos
    setTimeout(function() {
      if (username === "NOEL" && password === "123") {
        loginStatus.textContent = "Inicio de sesión correcto. Redireccionando...";
        loginStatus.style.color = "green";
        setTimeout(function() {
          window.location.href = "principal.html"; // Redirige a la página principal
        }, 1000);
      } else {
        loginStatus.textContent = "Contraseña incorrecta. Inténtalo de nuevo.";
        loginStatus.style.color = "red";
        document.getElementById("username").value = ""; // Borra el contenido del campo de usuario
        document.getElementById("password").value = ""; // Borra el contenido del campo de contraseña
      }
    }, 2000);
  });
  