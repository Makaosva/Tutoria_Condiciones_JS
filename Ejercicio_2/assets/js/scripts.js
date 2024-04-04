function changeColor() {
  //alert("entro....");

  const colorSeleccionado = document.getElementById("colorselect").value;
  //alert(colorSeleccionado);
  const cuadro = document.getElementById("cuadro");
  cuadro.style.backgroundColor = colorSeleccionado;

  let mensaje;
  mensaje = `A Seleccionado el color `;
  //alert(mensaje);
  if (colorSeleccionado === "red") {
    mensaje += "Rojo";
  } else if (colorSeleccionado === "blue") {
    mensaje += "Azul";
  } else if (colorSeleccionado === "yellow") {
    mensaje += "Amarillo";
  }else if (colorSeleccionado === "green") {
    mensaje += "Verde";
  }

  document.getElementById("mensaje").innerText = mensaje;
}
