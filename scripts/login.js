/** @format */

let wholeData = JSON.parse(localStorage.getItem("signUpData-CW")) || [];

function enableButton() {
  let input = document.getElementById("email").value;
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

function login() {
  let input = document.getElementById("email").value;
  let istrue = false;
  wholeData.forEach((ele) => {
    if (ele.email === input) {
      istrue = true;
      localStorage.setItem("lastLoginedEmail", ele.email);
      document.getElementById("email").value = null;
      window.location.href = "./password.html";
    }
  });
  if (!istrue) {
    alert("No such user exists!");
    return;
  }
}
function submitOnEnter(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    login();
  }
}
