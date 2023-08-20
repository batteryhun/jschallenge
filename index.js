const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greetingBox = document.querySelector("#greeting-box");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(e) {
  const username = loginInput.value;
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
  greetingBox.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
