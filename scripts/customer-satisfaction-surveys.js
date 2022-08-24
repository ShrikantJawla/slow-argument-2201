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
