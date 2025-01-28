const principal = document.getElementById("principal");
const parrafos = document.getElementsByTagName("p");
const clase = document.querySelectorAll(".pepe2");
const pid = document.querySelector("#principal p#p1, #otro");
const ejecutar = () => {
  document.querySelector("#principal").onclick = adeu;
  for (let i = 0; i < 8; i++) {
    parrafos[i].onclick = hola;
  }
  parrafos[2].onclick = bgcolor;
  for (let i = 0; i < 2; i++) {
    clase[i].onmouseover = color;
  }

  pid.onclick = paraId;
  document.querySelector("button").onmouseover = foco;
  document.querySelector("button").onkeyup = detectar_tecla;
};

const hola = () => {
  alert("HOLAAAA");
};

const adeu = () => {
  alert("Adiooooooo");
};

const paraId = () => {
  alert("has clikado en un id");
};

const bgcolor = () => {
  document.querySelector("#principal").style.backgroundColor = "red";
};
const color = () => {
  document.querySelector("#principal").style.color = "grey";
};
const foco = () => {
  document.querySelector("button").focus();
};
const detectar_tecla = (e) => {
  e.keyCode == 13
    ? alert(`has presionado enter`)
    : alert(`no has clickado sobre "enter"`);
};
window.onload = ejecutar;
