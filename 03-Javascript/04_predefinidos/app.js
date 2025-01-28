function cambia(params) {
  alert(`Cambiamos color de fondo a  ${params}`);
  document.body.style.backgroundColor = params;
}
alert("Cambiamos color de fondo a VERDE");
document.body.style.backgroundColor = "green";
alert("Cambiamos color de fondo a ROJO");
document.body.style.backgroundColor = "red";

let btnred = document.querySelector("#red");
let btngreen = document.querySelector("#green");
btnred.onclick = () => {
  document.body.style.backgroundColor = "red";
  alert("cambiad de color a fondo rojo");
}; //Asigna una función al evento onclick del botón con id red. Cuando el botón es clickeado: Cambia el color de fondo del cuerpo a rojo ("red"). Muestra una alerta que avisa al usuario del cambio.

btngreen.onclick = () => {
  document.body.style.backgroundColor = "green";
  alert("cambiamos de color a fondo verde");
};

/* Esta función recibe un argumento llamado params.
    Muestra una alerta (alert) indicando el color que se va a aplicar al fondo de la página (params).
    Luego cambia el color de fondo del cuerpo del documento (document.body.style.backgroundColor) al valor recibido en params. */
