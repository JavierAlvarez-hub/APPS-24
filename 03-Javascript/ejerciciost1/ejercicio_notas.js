let nota = prompt("introduce una nota numerica, por ej: 8");
if (nota < 5) {
  alert(`la nota ${nota} es un suspens como una casa tete`);
} else if (nota < 6) {
  alert(`la nota ${nota} es un aprovat`);
} else if (nota < 7) {
  alert(`la nota ${nota} es un bè`);
} else if (nota < 9) {
  alert(`la nota ${nota} es un Notable`);
} else if (nota <= 10) {
  alert(`la nota ${nota} es un Excel.lent`);
}
