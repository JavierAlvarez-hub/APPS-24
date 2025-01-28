alert("PopUp escrito desde un alert escrito desde un archivo externo");
document.querySelector("#mostrar").innerHTML =
  "<h2>texto escrito dentro de la id 'mostrar' desde un js externo </h2>"; /* con esto llamamos al objeto con identidad mostrar */
document.getElementById("mostrar2").innerHTML =
  "<h3 style= 'font-family: Arial, sams-serif'>texto escrito dentro de la id 'mostrar' desde un js externo </h3>";

function nombre() {
  var nombre = prompt("introduce tu nombre");
  alert(nombre + " es mi nombre");

  alert(`${nombre} es mi nombre`);
  console.log(nombre + " es mi nombre");
  console.log(`${nombre} es mi nombre`);
  document.getElementById("mostrar3").innerHTML = `${nombre} es mi nombre`;
  ("<h3 style= 'font-family: Arial, sams-serif'>"); /* esta funcion reescribe el texto en el documento  */
}
let btn = document.querySelector("#btn");
btn.onclick = nom;
