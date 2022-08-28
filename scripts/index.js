let span = document.getElementById("type");
const textarr = [
  "Are my customers actually satisfied?",
  "Will my product be a success or a flop?",
  "Are my employees happy at work?",
  "Do people like attending my events?",
];
const tdelay = 50;
const edelay = 32;
const ndelay = 2000;
let i = 0;
let chari = 0;
function type() {
  if (chari < textarr[i].length) {
    span.textContent += textarr[i].charAt(chari);
    chari++;
    setTimeout(type, tdelay);
  } else {
    setTimeout(erase, ndelay);
  }
}
function erase() {
  if (chari > 0) {
    span.textContent = textarr[i].substring(0, chari - 1);
    chari--;
    setTimeout(erase, edelay);
  } else {
    i++;
    if (i >= textarr.length) i = 0;
    setTimeout(type, tdelay + 1100);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, ndelay + 250);
});
const dclick = document.getElementById("defaultclick");

import {
  defaultclick,
  employees,
  customers,
  tm,
  others,
  clear,
} from "./indexcomponent.js";
let btn = document.querySelectorAll(".btn");
btn[0].addEventListener("click", function () {
  btnlick(btn[0].id);
});
btn[1].addEventListener("click", function () {
  btnlick(btn[1].id);
});
btn[2].addEventListener("click", function () {
  btnlick(btn[2].id);
});
btn[3].addEventListener("click", function () {
  btnlick(btn[3].id);
});
dclick.innerHTML = defaultclick();
let c = document.querySelector(".clear");
c.addEventListener("click", clr);
function clr() {
  dclick.innerHTML = defaultclick();
  c.innerHTML = "";
}
function btnlick(id) {
  dclick.innerHTML = "";
  document.getElementById(`${id}`).classList.add("btn0");
  c.innerHTML = clear();
  if (id == "btn1") {
    dclick.innerHTML = employees();
  } else if (id == "btn2") {
    dclick.innerHTML = customers();
  } else if (id == "btn3") {
    dclick.innerHTML = tm();
  } else if (id == "btn4") {
    dclick.innerHTML = others();
  } else dclick.innerHTML = defaultclick();
}
