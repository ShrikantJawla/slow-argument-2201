let navbar = document.querySelector("nav");
import { sideoption, products, solutions, resources } from "./sidebar.js";
let fixed = navbar.offsetTop;
import { nav, Products, Solutions, Resources, difnav } from "./nav.js";
displaynav(difnav);
function displaynav(data) {
  navbar.innerHTML = "";
  navbar.innerHTML = data();
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
      id1.innerHTML = `Products <i class="fa-solid fa-angle-down classcolor"></i>`;
      count1 = 1;
    } else {
      count2 = count3 = 0;
      count1 = 0;
      show3();
      show2();
      id1.innerHTML = `Products <i class="fa-solid fa-angle-up classcolor"></i>`;
      menu.innerHTML = Products();
    }
  }
  function show2() {
    id2.innerHTML = "";
    menu.innerHTML = "";
    if (count2 == 0) {
      id2.innerHTML = `Solutions <i class="fa-solid fa-angle-down classcolor"></i>`;
      count2 = 1;
    } else {
      count2 = 0;
      count3 = count1 = 0;
      show1();
      show3();
      id2.innerHTML = `Solutions <i class="fa-solid fa-angle-up classcolor"></i>`;
      menu.innerHTML = Solutions();
    }
  }
  function show3() {
    id3.innerHTML = "";
    menu.innerHTML = "";
    if (count3 == 0) {
      id3.innerHTML = `Resources <i class="fa-solid fa-angle-down classcolor"></i>`;
      count3 = 1;
    } else {
      count2 = count1 = 0;
      count3 = 0;
      show1();
      show2();
      id3.innerHTML = `Resources <i class="fa-solid fa-angle-up classcolor"></i>`;
      menu.innerHTML = Resources();
    }
  }
}

window.onscroll = function () {
  navonscroll();
};
function navonscroll() {
  if (window.pageYOffset > fixed) {
    navbar.classList.add("fixed");
    displaynav(nav);
    displaysidenav();
  } else {
    navbar.classList.remove("fixed");
    displaynav(difnav);
    displaysidenav();
  }
}
displaysidenav();
function displaysidenav(t) {
  let sidenav = document.getElementById("sidemenu");
  sidenav.addEventListener("click", sidemenu);
  let sidebar = document.getElementById("sidenavbar");
  let scount = 1;
  function sidemenu() {
    if (scount == 0) {
      sidebar.style.visibility = "hidden";
      sidenav.innerHTML = `<i class="fa-solid fa-bars classcolor"></i>`;
      scount = 1;
    } else {
      scount = 0;
      sidebar.style.visibility = "visible";
      sidenav.innerHTML = `<i class="fa-solid fa-x classcolor"></i>`;
    }
  }
  sidebar.innerHTML = sideoption();

  let id1 = document.getElementById("products");
  let id3 = document.getElementById("resources");
  let id2 = document.getElementById("solutions");
  id1.addEventListener("click", show1);
  id2.addEventListener("click", show2);
  id3.addEventListener("click", show3);
  let menu1 = document.getElementById("sidemenubar1");
  let menu2 = document.getElementById("sidemenubar2");
  let menu3 = document.getElementById("sidemenubar3");
  let count1 = 1;
  let count2 = 1;
  let count3 = 1;
  function show1() {
    id1.innerHTML = "";
    menu1.innerHTML = "";
    menu2.innerHTML = "";
    menu3.innerHTML = "";
    if (count1 == 0) {
      id1.innerHTML = `Products <i class="fa-solid fa-angle-down"></i>`;
      count1 = 1;
    } else {
      count2 = count3 = 0;
      count1 = 0;
      show3();
      show2();
      id1.innerHTML = `Products <i class="fa-solid fa-angle-up"></i>`;
      menu1.innerHTML = products();
    }
  }
  function show2() {
    id2.innerHTML = "";
    menu1.innerHTML = "";
    menu2.innerHTML = "";
    menu3.innerHTML = "";
    if (count2 == 0) {
      id2.innerHTML = `Solutions <i class="fa-solid fa-angle-down"></i>`;
      count2 = 1;
    } else {
      count2 = 0;
      count3 = count1 = 0;
      show1();
      show3();
      id2.innerHTML = `Solutions <i class="fa-solid fa-angle-up"></i>`;
      menu2.innerHTML = solutions();
    }
  }
  function show3() {
    id3.innerHTML = "";
    menu1.innerHTML = "";
    menu2.innerHTML = "";
    menu3.innerHTML = "";
    if (count3 == 0) {
      id3.innerHTML = `Resources <i class="fa-solid fa-angle-down"></i>`;
      count3 = 1;
    } else {
      count2 = count1 = 0;
      count3 = 0;
      show1();
      show2();
      id3.innerHTML = `Resources <i class="fa-solid fa-angle-up"></i>`;
      menu3.innerHTML = resources();
    }
  }
}
