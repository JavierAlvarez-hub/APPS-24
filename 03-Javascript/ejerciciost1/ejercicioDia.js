let dia = prompt("introduce un dia de la semana en minuscula ej: lunes");
dia = dia.toUpperCase();
switch (dia) {
  case "LUNES":
    alert(`EL ${dia} es el dia uno de la semana`);
    break;
  case "MARTES":
    alert(`El ${dia} es el dia dos de la semana`);
    break;
  case "MIERCOLES":
    alert(`el ${dia} es el dia tres de la semana`);
    break;
  case "JUEVES":
    alert(`EL ${dia} es el dia cuatro de la semana`);
    break;
  case "VIERNES":
    alert(`El ${dia} es el dia cinco de la semana`);
    break;
  case "SABADO":
    alert(`el ${dia} es el dia seis de la semana`);
    break;
  case "DOMINGO":
    alert(`el ${dia} es el dia siete de la semana`);
    break;
  default:
    alert("eso no es un dia de la semana");
}
