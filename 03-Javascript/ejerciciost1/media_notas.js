let nota1 = Number(
  prompt("escribe la primera nota")
); /* al escribir la palabra Number le decimos al programa que solo queremos introducir numeros en la variable */
let nota2 = Number(prompt("escribe la segunda nota"));
let media = (nota1 + nota2) / 2;
console.log(media);

if (media < 5) {
  alert(`la media ${media} es un suspens como una casa tete`);
} else if (media < 6) {
  alert(`la media ${media} es un aprovat`);
} else if (media < 7) {
  alert(`la media ${media} es un bè`);
} else if (media < 9) {
  alert(`la media ${media} es un Notable`);
} else if (media <= 10) {
  alert(`la media ${media} es un Excel.lent`);
}

document.write(`tu nota media es de ${media}`);
