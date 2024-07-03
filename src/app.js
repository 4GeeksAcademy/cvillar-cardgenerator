/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  generarcarta();

  document.getElementById("cambiarCarta").onclick = function() {
    generarcarta();
    mostrarTablaCartas();
  };
};
let cartas = {
  "♥": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "♦": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "♠": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "♣": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
};
function cargarCartas() {
  const cartasGuardadas = localStorage.getItem("cartas");
  if (cartasGuardadas) {
    cartas = JSON.parse(cartasGuardadas);
  }
}

function guardarCartas() {
  localStorage.setItem("cartas", JSON.stringify(cartas));
}
function generarcarta() {
  // Listas de opciones para construir la Carta
  let palo = ["♥", "♦", "♠", "♣"];
  let valorCarta = [
    "AS",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "7",
    "9",
    "10",
    "King",
    "Queen"
  ];
  //Elige un valor y un palo
  let indexpalo = Math.floor(Math.random() * palo.length);
  let eleccionPalo = palo[indexpalo];
  let indexvalor = Math.floor(Math.random() * valorCarta.length);
  let eleccionValor = valorCarta[indexvalor];

  // Mostrar la carta
  let paloMostarArriba = document.getElementById("mostarArriba");
  let paloMostarAbajo = document.getElementById("mostarAbajo");
  let valor = document.getElementById("valor");
  paloMostarArriba.innerText = eleccionPalo;
  paloMostarAbajo.innerText = eleccionPalo;
  valor.innerText = eleccionValor;
  //muestra si es una carta roja o no
  if (eleccionPalo == "♥" || eleccionPalo == "♦") {
    document.getElementById("mostarArriba").style.color = "red";
    document.getElementById("valor").style.color = "red";
    document.getElementById("mostarAbajo").style.color = "red";
  }
  cartas[eleccionPalo][indexvalor] = cartas[eleccionPalo][indexvalor] + 1;
  guardarCartas();
}
function mostrarTablaCartas() {
  const tablaCartasDiv = document.getElementById("tablaCartas");
  tablaCartasDiv.innerHTML = ""; // Limpiar contenido previo

  const tabla = document.createElement("table");
  const header = tabla.createTHead();
  const headerRow = header.insertRow(0);
  let cell = headerRow.insertCell(0);
  cell.innerHTML = "<b>Palo</b>";
  const valores = [
    "AS",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "King",
    "Queen"
  ];
  valores.forEach((valor, index) => {
    cell = headerRow.insertCell(index + 1);
    cell.innerHTML = `<b>${valor}</b>`;
  });

  const body = tabla.createTBody();
  for (const palo in cartas) {
    const row = body.insertRow();
    let cell = row.insertCell(0);
    cell.innerHTML = palo;
    cartas[palo].forEach(cantidad => {
      cell = row.insertCell();
      cell.innerHTML = cantidad;
    });
  }

  tablaCartasDiv.appendChild(tabla);
}
cargarCartas();
mostrarTablaCartas();
console.log(cartas);
