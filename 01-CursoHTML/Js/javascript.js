function otraalerta() {
  window.confirm("esta ventana es un confirm, aprieta 'aceptar' para cerrarlo");
}
var miVideo = document.getElementById("musicos");
function reproducepara() {
  if (miVideo.paused) miVideo.play();
  else miVideo.pause();
}
/* esta funcion mira si el video esta parado, en ese caso al darle lo reproduce, en caso contrari (else) lo pausa */
function grande() {
  miVideo.width = 560;
}
function pequeño() {
  miVideo.width = 320;
}
function Normal() {
  miVideo.width = 420;
}
