const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greetingBox = document.querySelector("#greeting-box");
const closeBtn = document.querySelector("#close-button");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello! Welcome ${username}!`;
  greetingBox.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  greetingBox.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello! Welcome ${savedUsername}!`;
}
