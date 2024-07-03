/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generarcarta();
};

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

  let cartas = [
    { "♥": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    { "♦": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    { "♠": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    { "♣": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
  ];

  // cartas[eleccionPalo][indexvalor] = cartas[eleccionPalo][indexvalor] + 1;
}
