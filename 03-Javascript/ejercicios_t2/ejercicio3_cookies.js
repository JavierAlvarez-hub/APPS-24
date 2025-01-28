let cookies = navigator.cookieEnabled;

if (cookies) {
  window.confirm("esta pagina contiene cookies");
  if (confirm("esta pagina contiene cookies") == true) {
    //en caso de que le de a aceptar cuando salga este mensaje haz esto
    text = "Aceptaste las cookies";
  } else {
    //en caso contrario me saca de la pagina y me lleva a la de w3schools
    location.replace(
      "https://www.w3schools.com/#gsc.tab=0&gsc.q=location.replace"
    );
  }
  document.getElementById("demo").innerHTML = text;
}
