/** @format */

let enteredEmail = localStorage.getItem("lastLoginedEmail");
let wholeData = JSON.parse(localStorage.getItem("signUpData-CW")) || [];

function enableButton() {
	let input = document.querySelector(".pass-input").value;
	if (input !== "") {
		document.getElementById("submitButton").classList.remove("button-disabled");
		document.getElementById("submitButton").classList.add("button-enabled");
		document.getElementById("submitButton").disabled = false;
	} else {
		document.getElementById("submitButton").classList.remove("button-enabled");
		document.getElementById("submitButton").classList.add("button-disabled");
		document.getElementById("submitButton").disabled = true;
	}
}

function finalLogin() {
	let pass = document.querySelector(".pass-input").value;
	console.log(pass);
	isTrue = false;
	wholeData.forEach((ele) => {
		if (ele.email === enteredEmail && ele.password === pass) {
			isTrue = true;
			let isSignedInData = { email: ele.email, loggedIn: true };
			localStorage.setItem("isSignedIn", JSON.stringify(isSignedInData));
			document.querySelector(".pass-input").value = null;
			window.location.href = "./index2.html";
		}
	});
	if (!isTrue) {
		alert("No Such user Exists please check Password!");
		return;
	}
}
function submitOnEnter(event) {
	if (event.key === "Enter") {
		event.preventDefault();
		finalLogin();
	}
}
