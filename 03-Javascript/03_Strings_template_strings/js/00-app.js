let nombre = "Oscar";
let apellido = "Perolillos";
const PI = 3.1416;
const saludo = `Bienvenido ${nombre} ${apellido} a nuestra aplicacion`;

const mostra = document.querySelector("#mostra");
mostra.innerHTML = saludo;

const primavera = "primavera";
const verano = "verano";
const otoño = "otoño";
const invierno = "invierno";

const estaciones = `<ul>
    <li>${primavera}</li>
    <li>${verano}</li>
    <li>${otoño}</li>
    <li>${invierno}</li>
  </ul>
`;

const mostralista = document.querySelector("#mostralista");
mostralista.innerHTML = estaciones;
