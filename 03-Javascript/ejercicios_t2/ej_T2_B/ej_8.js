function otrotitulo() {
  let titulo_nuevo = document.getElementById("newtitulo").value;

  document.getElementById("new_titulo").innerHTML = titulo_nuevo;
}

let btngrey = document.querySelector("#grey");
let btnwhite = document.querySelector("#white");
btngrey.onclick = () => {
  document.body.style.backgroundColor = "grey";
  alert("cambiad de color a fondo gris");
};
btnwhite.onclick = () => {
  document.body.style.backgroundColor = "white";
  alert("cambiamos de color a fondo a blanco");
};
function myFunction() {
  document.getElementById("parrafo").style.color = "red";
}
function funcionverde() {
  document.getElementById("parrafo").style.color = "green";
}
