function validarEdad() {
  const edad = Number(document.getElementById("edadInput").value);
  console.log("edad :", edad);
  console.log("tipo de dato: ", typeof edad);
  
  const mensaje = document.getElementById("mensaje");

  if (edad >= 18 && edad <= 40) {
    mensaje.textContent = "¡Bienvenido, adulto joven!";
  } else if (edad > 40) {
    mensaje.innerHTML = "<strong>¡Bienvenido!</strong>";
  } else {
    mensaje.textContent = "Debes tener al menos 18 años para ingresar";
  }

  //   if (edad >= 18 && edad <= 40) {
  //     alert("¡Bienvenido, adulto joven!");
  //   } else if (edad > 40) {
  //     alert("¡Bienvenido!");
  //   } else {
  //     alert("Debes tener al menos 18 años para ingresar");
  //   }
}
