/* reglas para variables var y let */
var nombre = "contenido"; /* variable de ambito global, se puede redeclarar */
var nombre = "contenido2";
nombre = "contenido3"; //se puede reasignar

let monitor = "pantalla de ordenador de 21 pulgadas:"; //Inicializamos variable con valor de tipo let, cuyo ambito es de bloque. Se entiende por bloque el juego de () al que pertenece una vez usada.
//let no se puede reedeclarar
//var y let se pueden reasignar

//JavaScript es un lenguaje de tipo dinamico , no se especifican tipo de datos cuando se crea la variable, sino al reasignar el valor de tipado debil.

let precio = 200;
console.log(precio);

//tambien se puede inicialiazar una variable sin valor y asignarlo despues

let disponible;
console.log(disponible);
disponible = true;
console.log(disponible);

//Inicializar multiples variables
let tipo = "sobreMesa",
  fabricante = "sin nombre",
  valoracion = 5;
console.log(tipo);
console.log(fabricante);
console.log(valoracion);

//Reglas de las variables
//pueden tener letras, numeros,  _no pueden iniciar con numero
// ej: let 99num

//nombrar variables con mas de una palabra

let nombreProducto = "Monitor 30 pulgadas"; //CamelCase habitual en funciones, arreglos y variables.
let nombre_producto = "Monitor 30 pulgadas"; // Underscore habitual en variables
let NombreProducto = "Monitor 30 pulgadas"; // Pascal case habitual en objetos, classes.
let nombreproducto = "Monitos 30 pulgadas"; // habitual en variables.
