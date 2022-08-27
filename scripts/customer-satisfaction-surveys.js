/** @format */

let rating = document.querySelectorAll(".rating");

for (let i = 0; i < rating.length; i++) {
	rating[i].addEventListener("click", () => {
		for (let j = 0; j < rating.length; j++) {
			rating[j].style.color = "black";
			rating[j].style.backgroundColor = "white";
		}
		rating[i].style.backgroundColor = "black";
		rating[i].style.color = "white";
	});
}
let boxes1 = document.querySelectorAll(".box1");
for (let i = 0; i < boxes1.length; i++) {
	boxes1[i].addEventListener("click", () => {
		for (let j = 0; j < boxes1.length; j++) {
			boxes1[j].style.backgroundColor = "white";
		}
		boxes1[i].style.backgroundColor = "black";
	});
}
let boxes2 = document.querySelectorAll(".box2");
for (let i = 0; i < boxes2.length; i++) {
	boxes2[i].addEventListener("click", () => {
		for (let j = 0; j < boxes2.length; j++) {
			boxes2[j].style.backgroundColor = "white";
		}
		boxes2[i].style.backgroundColor = "black";
	});
}

let firstp = document.querySelector(".firP");
firstp.style.color = "green";
firstp.style.borderBottom = "2px solid green";

function displayDiv(cls, ptag) {
	let divs = document.querySelectorAll(".dis");
	let pTags = document.querySelectorAll(".ptag");
	for (let i = 0; i < divs.length; i++) {
		divs[i].style.display = "none";
		pTags[i].style.color = "black";
		pTags[i].style.borderBottom = "none";
	}
	let p = document.querySelector(`.${ptag}`);
	p.style.color = "green";
	p.style.borderBottom = "2px solid green";

	let div = document.querySelector(`.${cls}`);
	div.style.display = "block";
}

let desktopIcon = document.querySelector(".fa-desktop");
let tabletIcon = document.querySelector(".fa-tablet");
let mobileIcon = document.querySelector(".fa-mobile-screen");

//First add class to desktop icon by default on loading the page;
desktopIcon.classList.add("fa-icon-background-change");
desktopIcon.addEventListener("click", () => {
	//First removed 'fa-icon-background-change'class from all fa-icons
	//and then added to individual which you are clicking on.
	tabletIcon.classList.remove("fa-icon-background-change");
	mobileIcon.classList.remove("fa-icon-background-change");
	desktopIcon.classList.add("fa-icon-background-change");
	//Here changing resposive div position's right
	let resposiveIconDiv = document.querySelector(".resposive-icons");
	resposiveIconDiv.style.right = "10.9%";

	//Here changing the class of content holder class but first remove all
	//class from all from it
	let contentHolder = document.querySelector(".screen");
	contentHolder.classList.remove(
		"content-holder",
		"content-holder-tablet",
		"content-holder-mobile"
	);
	contentHolder.classList.add("content-holder");
});
tabletIcon.addEventListener("click", () => {
	mobileIcon.classList.remove("fa-icon-background-change");
	desktopIcon.classList.remove("fa-icon-background-change");
	tabletIcon.classList.add("fa-icon-background-change");
	let resposiveIconDiv = document.querySelector(".resposive-icons");
	resposiveIconDiv.style.right = "25.4%";
	let contentHolder = document.querySelector(".screen");
	contentHolder.classList.remove(
		"content-holder",
		"content-holder-tablet",
		"content-holder-mobile"
	);
	contentHolder.classList.add("content-holder-tablet");
});
mobileIcon.addEventListener("click", () => {
	tabletIcon.classList.remove("fa-icon-background-change");
	desktopIcon.classList.remove("fa-icon-background-change");
	mobileIcon.classList.add("fa-icon-background-change");
	let resposiveIconDiv = document.querySelector(".resposive-icons");
	resposiveIconDiv.style.right = "34.6%";
	let contentHolder = document.querySelector(".screen");
	contentHolder.classList.remove(
		"content-holder",
		"content-holder-tablet",
		"content-holder-mobile"
	);
	contentHolder.classList.add("content-holder-mobile");
});
