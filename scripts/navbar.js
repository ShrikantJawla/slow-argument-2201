let navbar = document.querySelector("nav");
let navlogo = document.getElementById("navlogo");
let fixed = navbar.offsetTop;
import { nav, Products, Solutions, Resources } from "./nav.js";
navbar.innerHTML = nav();
let id1 = document.getElementById("Products");
let id3 = document.getElementById("Resources");
let id2 = document.getElementById("Solutions");
id1.addEventListener("click", show1);
id2.addEventListener("click", show2);
id3.addEventListener("click", show3);
let menu = document.getElementById("menu");
let count1 = 1;
let count2 = 1;
let count3 = 1;
function show1() {
  id1.innerHTML = "";
  menu.innerHTML = "";
  if (count1 == 0) {
    id1.innerHTML = `Products <i class="fa-solid fa-angle-down"></i>`;
    count1 = 1;
  } else {
    count2 = count3 = 0;
    count1 = 0;
    show3();
    show2();
    id1.innerHTML = `Products <i class="fa-solid fa-angle-up"></i>`;
    menu.innerHTML = Products();
  }
}
function show2() {
  id2.innerHTML = "";
  menu.innerHTML = "";
  if (count2 == 0) {
    id2.innerHTML = `Solutions <i class="fa-solid fa-angle-down"></i>`;
    count2 = 1;
  } else {
    count2 = 0;
    count3 = count1 = 0;
    show1();
    show3();
    id2.innerHTML = `Solutions <i class="fa-solid fa-angle-up"></i>`;
    menu.innerHTML = Solutions();
  }
}
function show3() {
  id3.innerHTML = "";
  menu.innerHTML = "";
  if (count3 == 0) {
    id3.innerHTML = `Resources <i class="fa-solid fa-angle-down"></i>`;
    count3 = 1;
  } else {
    count2 = count1 = 0;
    count3 = 0;
    show1();
    show2();
    id3.innerHTML = `Resources <i class="fa-solid fa-angle-up"></i>`;
    menu.innerHTML = Resources();
  }
}
window.onscroll = function () {
  navonscroll();
};
function navonscroll() {
  if (window.pageYOffset > fixed) {
    navbar.classList.add("fixed");
    navbar.style.background = "#fff";
    navlogo.src =
      "https://prod.smassets.net/assets/website/2.182.0/images/logo-surveymonkey.svg";
  } else {
    navbar.classList.remove("fixed");
  }
}
