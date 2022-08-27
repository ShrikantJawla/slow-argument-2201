/** @format */

let data = JSON.parse(localStorage.getItem("lastSavedEmail"));
let wholeData = JSON.parse(localStorage.getItem("signUpData-CW")) || [];
function enableButton() {
	let input1 = document.querySelector(".pass-input1").value;
	let input2 = document.querySelector(".pass-input2").value;
	if (input1 !== "" && input2 !== "") {
		document.getElementById("submitButton").classList.remove("button-disabled");
		document.getElementById("submitButton").classList.add("button-enabled");
		document.getElementById("submitButton").disabled = false;
	} else {
		document.getElementById("submitButton").classList.remove("button-enabled");
		document.getElementById("submitButton").classList.add("button-disabled");
		document.getElementById("submitButton").disabled = true;
	}
}

function savePass() {
	let input1 = document.querySelector(".pass-input1").value;
	let input2 = document.querySelector(".pass-input2").value;
	if (input1 !== input2) {
		alert("Password does not match!");
		return;
	}
	data.password = input1;
	wholeData.push(data);
	localStorage.setItem("signUpData-CW", JSON.stringify(wholeData));
	document.querySelector(".pass-input1").value = null;
	document.querySelector(".pass-input2").value = null;
	window.location.href = "./login.html";
}
function submitOnEnter(event) {
	if (event.key === "Enter") {
		event.preventDefault();
		savePass();
	}
}
