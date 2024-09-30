/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = [
    "Mi gato ",
    "El perro del vecino ",
    "El dueño del piso donde vivo ",
    "Mi madre ",
    "Mi hermano pequeño "
  ];
  let action = [
    "quebró ",
    "tiró al piso ",
    "derramó cerveza encima de ",
    "rompió "
  ];
  let what = ["mi ratón ", "la pantalla ", "mi móvil ", "mi portatil "];
  let whenWhy = [
    "mientras me estaba duchando.",
    "porque no le gusta que pase mucho tiempo en la computadora.",
    "hace unas semanas.",
    "justo antes de la clase.",
    "anoche."
  ];
  let excusa =
    who[Math.floor(Math.random() * 5)] +
    action[Math.floor(Math.random() * 4)] +
    what[Math.floor(Math.random() * 4)] +
    whenWhy[Math.floor(Math.random() * 4)];

  document.getElementById("excuse").innerHTML = excusa;
};
