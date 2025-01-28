let table = `
  <table style="width: 100%">
    <tr>
      <th id="cabecera1"></th>
      <th id="cabecera2"></th>
    </tr>
    <tr>
      <td>Valor màxim que pot tenir un número en JavaScript</td>
      <td id ="respuesta1"></td>
      
     </tr>
    <tr>
      <td>Valor mínim que pot tenir un número en JavaScript</td>
      <td id="respuesta2"></td>
    </tr>
    
    <tr>
      <td>Alçada total de la pantalla</td>
      <td id="respuesta3"></td>
    </tr>
    <tr>
      <td>Amplada total de la pantalla</td>
      <td id="respuesta4"></td>
    </tr>
    <tr>
      <td>Alçada de la pàgina web</td>
      <td id ="respuesta5"></td>
    </tr>
    <tr>
      <td>Amplada de la pàgina web</td>
      <td id="respuesta6"></td>
    </tr>
    <tr>
      <td>URL de la pàgina web</td>
      <td id="respuesta7"></td>
    </tr>
    <tr>
      <td>Nom de la pàgina web amb la seva extensió (index.html)</td>
      <td id="respuesta8"></td>
    </tr>
    <tr>
      <td>Nom de la pàgina web sense la seva extensió (index)</td>
      <td id="respuesta9"></td>
    </tr>
    <tr>
      <td>Un valor aleatori entre 0 i 200 (utilitza Math)</td>
      <td id="respuesta10"></td>
    </tr>
    
    <tr>
      <td>Sistema operatiu de lordinador.</td>
      <td id="respuesta11"></td>
    </tr>
  </table>
`;
document.querySelector("#contenedor_table").innerHTML = table; //esto llama al objeto del html y le dice que muestre la variable table, que contiene la tabla
document.querySelector("#cabecera1").innerHTML = "PROPIETAT";
document.querySelector("#cabecera2").innerHTML = "VALOR OBTINGUT AMB JS";
document.querySelector("#respuesta1").innerHTML = Number.MAX_VALUE;
document.querySelector("#respuesta2").innerHTML = Number.MIN_VALUE;
document.querySelector("#respuesta3").innerHTML = screen.height;
document.querySelector("#respuesta4").innerHTML = screen.width;
document.querySelector("#respuesta5").innerHTML = window.innerHeight;
document.querySelector("#respuesta6").innerHTML = window.innerWidth;
document.querySelector("#respuesta7").innerHTML = window.location.pathname;
document.querySelector("#respuesta8").innerHTML = window.location.href;
document.querySelector("#respuesta9").innerHTML = window.location.hostname;
document.querySelector("#respuesta10").innerHTML = Math.floor(
  Math.random() * 201
);
document.querySelector("#respuesta11").innerHTML = navigator.platform;

function finestra() {
  let valor1;
  let valor2;
  let cont = prompt("introduce dos valores separados por comas");
  let h1 = cont.indexOf(","); //la variable es igual a la posicion donde se encuentra la coma
  console.log(h1);
  valor1 = cont.substring(0, h1); //creamos una variable que contenga la variable cont, que es lo que introduce el ususario, desde la posicion 0 hasta la "," es decir la variable h1
  console.log(valor1); //aqui comprobamos en la consola que la variable esta recogiendo de forma correcta
  valor2 = cont.substring(h1 + 1); //creamos otra variable que contenga la varible cont, de la coma (h1) hacia adelante
  console.log(valor2);

  while (
    valor1.length < 3 ||
    valor1.length > 20 ||
    (valor2 != "yes" && valor2 != "no")
  ) {
    alert("introduce un valor valido");
  }

  const titulo = valor1;
  console.log(titulo);
  const barras = valor2;
  console.log(barras);
  let ancho = Math.floor(Math.random() * 400) + 50;
  let alto = Math.floor(Math.random() * 400) + 50;

  let nueva_pagina = window.open(
    //metemos el window.open en una wariable para despues hacerle un onload y darle los parametros que queremos dentro de la funcion
    "http://localhost:5500/03-Javascript/ejercicios_t2/finestra/finestra.html",
    "location=no",
    `width=${ancho}`,
    `height=${alto}`
  );

  nueva_pagina.onload = function () {
    nueva_pagina.document.title = `${titulo}`;
    function hora(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    } // en esta funcion le decimos que si la hora en ese momento es inferior al valor "10" que le añada un 0 delante

    const d = new Date();
    let h = hora(d.getHours());
    let m = hora(d.getMinutes());
    let s = hora(d.getSeconds());
    let time = h + ":" + m + ":" + s;

    let saludo;
    if (h <= 14 && h >= 6) {
      saludo = "Bon dia";
    } else if (h > 14 && h < 20) {
      saludo = "buenas tardes";
    } else {
      saludo = "bona nit";
    }
    nueva_pagina.document.body.innerHTML = `${time} ${saludo}`;
  };
}
