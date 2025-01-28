function cambiarTitulo() {
  let titulo = document.getElementById("newtitulo").value;
  let result = titulo.toUpperCase();
  document.getElementById("principal").innerHTML = result;
}
