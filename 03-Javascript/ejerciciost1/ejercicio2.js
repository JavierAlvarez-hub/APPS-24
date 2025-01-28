let numero = parseInt(
  prompt("Introduce un número para calcular su factorial:")
);
function calcularFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let resultado = 1;
    let i = 2;
    while (i <= n) {
      resultado *= i;
      i++;
    }
    return resultado;
  }
}
if (isNaN(numero) || numero < 0) {
  console.log("Por favor, introduce un número válido y positivo.");
} else {
  // Calcular el factorial y mostrarlo en la consola
  let factorial = calcularFactorial(numero);
  console.log("El factorial de " + numero + " es: " + factorial);
}
/* Explicación:

    Usamos un ciclo while para multiplicar los números de 2 hasta el número ingresado, de forma similar a cómo lo haríamos con un for.
    Dentro de la función calcularFactorial, la variable i se incrementa con cada iteración del ciclo while.
    El resto del código es similar al anterior, manejando entradas no válidas y mostrando el resultado en la consola. */
