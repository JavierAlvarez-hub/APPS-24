let result, resultado;
const num = document.querySelector("#numero");
const mostra = document.querySelector("#mostra1");
const btn1 = document.querySelector("#btn_ejer1");
const borrar = document.querySelector("#btn_limpiar");

const parimpar = () => {
  let n = num.value;
  console.log(typeof n);
  n = Number(n.replace(",", "."));
  console.log(typeof n);
  if (isNaN(n) || n == "") {
    resultado = "no puedo operar";
  } else {
    result = n % 2;
    if (result !== 0) {
      resultado = `el numero introducido es un numero impar, concretamente el ${n}<br/>`;
    } else {
      resultado = `el valor introducido es un numero par, concretamente el ${n} </br>`;
    }
  }
  mostra.innerHTML = resultado;
};

const borrando = () => {
  num.value = "";
  mostra.innerHTML = "";
};

btn1.onclick = parimpar;
borrar.onclick = borrando;
