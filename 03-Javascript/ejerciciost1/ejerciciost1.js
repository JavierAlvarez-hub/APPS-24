let numero1 = window.prompt("introduce el numero 1");
let numero2 = window.prompt("introduce el numero 2");

if (numero2 > numero1) {
  alert(`el ${numero2} es mayor que el ${numero1}`);
} else if (numero2 < numero1) {
  alert(`el ${numero1} es mayor que el ${numero2}`);
} else if (numero2 == numero1) {
  alert("los dos numeros son iguales");
}
