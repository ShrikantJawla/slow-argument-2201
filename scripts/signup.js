/** @format */

let data = JSON.parse(localStorage.getItem("signUpData-CW")) || [];

function enableButton() {
	let input = document.getElementById("email").value;
	let checkboxOne = document.getElementById("terms");
	if (input !== "" && checkboxOne.checked) {
		document.getElementById("submitButton").classList.remove("button-disabled");
		document.getElementById("submitButton").classList.add("button-enabled");
		document.getElementById("submitButton").disabled = false;
	} else {
		document.getElementById("submitButton").classList.remove("button-enabled");
		document.getElementById("submitButton").classList.add("button-disabled");
		document.getElementById("submitButton").disabled = true;
	}
}

function saveData() {
	let input = document.getElementById("email").value;
	let checkboxOne = document.getElementById("terms");
	let checkboxTwo = document.getElementById("agree");
	data.forEach((ele) => {
		if (ele.email === input) {
			alert("User already exists!");
			return;
		}
	});
	let emailUserData = {
		email: input,
		checkboxOne: checkboxOne.checked,
		checkboxTwo: checkboxTwo.checked,
	};
	localStorage.setItem("lastSavedEmail", JSON.stringify(emailUserData));
	document.getElementById("email").value = null;
	checkboxOne.checked = false;
	window.location.href = "./createpassword.html";
}
