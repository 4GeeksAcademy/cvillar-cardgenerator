/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function generarcarta() {
    // Listas de opciones para construir la excusa
    let palo = ["♠", "♥", "♦", "♣"];
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
    let eleccionPalo = palo[Math.floor(Math.random() * palo.length)];
    let eleccionValor =
      valorCarta[Math.floor(Math.random() * valorCarta.length)];
    let paloMostrar = `${eleccionPalo}`;
    let valorMostrar = `${eleccionValor}`;
    // Mostrar la carta
    let paloMostarArriba = document.getElementById("mostarArriba");
    let paloMostarAbajo = document.getElementById("mostarAbajo");
    let valor = document.getElementById("valor");
    paloMostarArriba.innerText = paloMostrar;
    paloMostarAbajo.innerText = paloMostrar;
    valor.innerText = valorMostrar;

    if (paloMostrar == "♥" || paloMostrar == "♦") {
      document.getElementById("mostarArriba").style.color = "red";
      document.getElementById("valor").style.color = "red";
      document.getElementById("mostarAbajo").style.color = "red";
    }
  }
  generarcarta();g
};
