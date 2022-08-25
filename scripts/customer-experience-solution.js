/** @format */

function displayCautionSign(e) {
	let div = document.createElement("div");
	div.classList.add("caution-sign");
	div.innerHTML = `<div class="caution-sign"><i class="fa-solid fa-circle-exclamation"></i>
						<p>Required</p></div>`;
	e.target.parentNode.append(div);
}
function removeCautionSign() {
	let cautionSigns = document.querySelectorAll(".caution-sign");
	// cautionS
}

let inputTags = document.querySelectorAll(".input-tag");
for (let i = 0; i < inputTags.length; i++) {
	inputTags[i].addEventListener("focusout", (event) => {
		if (event.target.nextElementSibling)
			event.target.nextElementSibling.remove();
        if (event.target.value === "") {
            displayCautionSign(event);
            event.target.style.outline='1px solid red'
        }
	});
	inputTags[i].addEventListener("input", (event) => {
		if (event.target.value !== "" && event.target.nextElementSibling)
			event.target.nextElementSibling.remove();
	});
	inputTags[i].addEventListener("focusin", (event) => {
		if (event.target.value === "" && event.target.nextElementSibling)
            event.target.nextElementSibling.remove();
        event.target.style.outline = "1px solid black";
	});
}
