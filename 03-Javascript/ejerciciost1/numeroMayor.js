let contador = 0; /* contador para numeros introducidos menos a 50 */
let numeros; /* variable para el numero intoducido */
do {
  numeros = Number(prompt("introduce un numero al azar"));
  contador++;
} while (numeros < 50);
//mostrar un alert cuando el numero sea menor que 50
document.write(`has introducido ${contador - 1} numeros inferiores a 50`);
/* alert(`has introducido ${contador} numeros inferiores a 50`); */
