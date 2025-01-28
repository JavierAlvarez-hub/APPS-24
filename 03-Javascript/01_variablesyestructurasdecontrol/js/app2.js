//veamos otro tipo de formas de crear variables. variables de tipo constante: const
//Existen pocas diferencias entre let y const, cuando hablamos de datos primitivos: En una variable con const su valor no puede ser reasignado, debe inicializarse con un valor, nunca undefined, suele escribirse en UPPERCASE.

//const precio
const PRECIO = 20;
console.log(PRECIO);

const mo = "pantalla de 19 pulgadas";
console.log(mo);
//mo = "monitor de 23 pulgadas"; esto da error en la consola, ya que una constante no se puede reasignar.
console.log(mo);

//Existen otras diferencias entre const y let especialmente cuando se trabaja con arrays y objetos, osea, con datos compelejos.
//Mientras mantengan la estructura del contenido o referencia, pueden sufrir modificaciones en los valores. recuerda: las variables con const no se pueden reasignar y tampoco pueden iniciar sin un valor.

//ejemplo:

const nom = function nombre() {
  var nombre;
};
