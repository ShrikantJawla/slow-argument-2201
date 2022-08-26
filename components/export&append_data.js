/** @format */

import { data } from "./template_data_container.js";
// console.log(data);

import { templates } from "./survey_templates_div.js";

let containerToAppend = document.getElementById("template_Container");
containerToAppend.innerHTML = templates();

let allCategories = [
	"Customers",
	"Education",
	"Employees",
	"Events",
	"Healthcare",
	"Market Research",
	"Nonprofit",
	"Other",
];

function appendCards(data) {
	let container = document.querySelector(".right_container");
	container.innerHTML = null;
	// data = filterData(data, "Customers");
	data.forEach(({ name, image }) => {
		let div = document.createElement("div");
		div.classList.add("cards");
		div.innerHTML = `<img
							src="${image}"
							alt="${name}"
						/>
						<div>${name}</div>`;
		container.append(div);
	});
	displayTotalTemplates(data);
}

appendCards(data);

function filterData(data, keyword) {
	let res = [];
	res = data.filter((ele) => {
		return ele.category === keyword;
	});
	return res;
}

function appendCategories(cat, data) {
	let container = document.querySelector(".categories_container");
	container.innerHTML = null;
	cat.forEach((ele) => {
		let d = filterData(data, ele);
		let length = d.length;
		let div = document.createElement("div");
		div.classList.add("category");
		div.innerHTML = `<div class="checkbox_and_text">
									<input class="checkbox" type="checkbox" value="${ele}" />
									<label for="customer">${ele}</label>
								</div>
								<p>${length}</p>`;
		container.append(div);
	});
}
appendCategories(allCategories, data);

function displayTotalTemplates(data) {
	let container = document.getElementById("totalCount");
	container.innerText = data.length;
}

let inputs = document.querySelectorAll(".checkbox");
let arr = [];
for (let i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener("click", function (e) {
		if (e.target.checked) {
			arr.push(e.target.value);
		} else {
			arr = arr.filter((ele) => {
				return ele != e.target.value;
			});
		}
		let res = filterMoreResults(arr, data);
		if (res.length !== 0) appendCards(res);
		else appendCards(data);
	});
}

function filterMoreResults(arrOfCategories, data) {
	let result = [];
	for (let i = 0; i < arrOfCategories.length; i++) {
		let d = data.filter((ele) => {
			return ele.category === arrOfCategories[i];
		});
		result.push(...d);
	}
	return result;
}

function appendThroughSearch() {
	let searchInput = document.getElementById("search_category").value.trim();
	let res = data.filter((ele) => {
		// return ele.category.toLowerCase() === searchInput.toLowerCase();
		return ele.category.toLowerCase().includes(searchInput.toLowerCase());
	});
	if (res.length !== 0) appendCards(res);
	else showNoResults();
}

document.getElementById("search_category").addEventListener("input", () => {
	appendThroughSearch();
});

function showNoResults() {
	let container = document.querySelector(".right_container");
	container.innerHTML = null;
	let div = document.createElement("div");
	div.classList.add("cantFindResults");
	div.innerHTML = `<img src="./images/icon-no-results (1).svg" alt="NoresultIcon" />
						<h1>Can’t find the template you’re looking for?</h1>
						<h3>
							SurveyMonkey makes it easy to create your own survey from scratch.
						</h3>
						<button>Get Started</button>`;
	container.append(div);
}
