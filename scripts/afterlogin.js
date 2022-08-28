import { nav, dropdownusermenu, alsidenav } from "./afterloginnav.js";
import { Products } from "./nav.js";
document.querySelector("nav").innerHTML = nav();
let userdlink = document.getElementById("larscreenuser");
let clickusericon = document.getElementById("clickusericon");
userdlink.addEventListener("click", userdrop);
let dd = document.getElementById("dropdowncontainer");
let clickc = 1;
function userdrop() {
  clickusericon.innerHTML = "";
  if (clickc == 0) {
    clickusericon.innerHTML = `<i class="fa-solid fa-caret-up"></i>`;
    dd.innerHTML = "";
    clickc = 1;
  } else {
    clickusericon.innerHTML = `<i class="fa-solid fa-caret-down"></i>`;
    dd.innerHTML = dropdownusermenu();
    clickc = 0;
    optclickc = 0;
    optdrop();
  }
}
let optiondrop = document.getElementById("largescreenopt");
optiondrop.addEventListener("click", optdrop);
let optclickc = 1;
function optdrop() {
  if (optclickc == 0) {
    document.getElementById("rightoption").innerHTML = "";
    optclickc = 1;
  } else {
    document.getElementById("rightoption").innerHTML = Products();
    optclickc = 0;
    clickc = 0;
    userdrop();
  }
}
function sidemenudropdown() {
  let sidep = document.getElementById("sidep");
  sidep.addEventListener("click", function () {
    sideproduct.classList.toggle("livisible");
  });
  let sidehelp = document.getElementById("sidehelp");
  sidehelp.addEventListener("click", function () {
    help.classList.toggle("livisible");
  });
  let help = document.querySelector(".help");
  let sideproduct = document.querySelector(".sideproduct");
}

let alsidenavbar = document.querySelector("#alsidenavbar");
let sidemenu = document.getElementById("sidemenu");
let ssidemenu = document.getElementById("ssidemenu");
let ab = 1;
let ac = 1;
sidemenu.addEventListener("click", showsidemenu);
function showsidemenu() {
  console.log("check side");
  if (ab == 0) {
    alsidenavbar.innerHTML = "";
    ab = 1;
  } else {
    alsidenavbar.innerHTML = alsidenav();
    sidemenudropdown();
    ab = 0;
  }
}
ssidemenu.addEventListener("click", sshowsidemenu);
function sshowsidemenu() {
  console.log("check sside");
  if (ac == 0) {
    alsidenavbar.innerHTML = "";
    ac = 1;
  } else {
    alsidenavbar.innerHTML = alsidenav();
    sidemenudropdown();
    ac = 0;
  }
}
document.getElementById("username").innerText = "";
let data = JSON.parse(localStorage.getItem("isSignedIn"));
let username = data.email;
document.getElementById("username").innerText = username;
let signout = document.getElementById("signout");
signout.addEventListener("click", () => {
  data = "";
  localStorage.setItem("username", JSON.stringify(data));
});
