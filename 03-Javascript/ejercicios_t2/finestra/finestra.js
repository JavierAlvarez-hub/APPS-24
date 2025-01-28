let nueva_ventana = prompt("introduce una direccion web");
window.opener.location.replace(`https://${nueva_ventana}`); //con el metodo window.opener en este caso reemplazamos la direccion url de la pagina padre, en este caso el index.html
