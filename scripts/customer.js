let container3box = document.getElementById("container3box");
import {
  Awareness,
  Purchase,
  Retention,
  Loyalty,
} from "./customer-components.js";
container3box.innerHTML = Awareness();
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
function btnlick(id) {
  container3box.innerHTML = "";
  document.querySelector(`.btn>span`).classList.remove("dbtn");
  if (id == "btn1") {
    container3box.innerHTML = Awareness();
  } else if (id == "btn2") {
    container3box.innerHTML = Purchase();
  } else if (id == "btn3") {
    container3box.innerHTML = Retention();
  } else if (id == "btn4") {
    container3box.innerHTML = Loyalty();
  } else container3box.innerHTML = Awareness();
}
