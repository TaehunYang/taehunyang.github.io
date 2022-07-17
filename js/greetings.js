const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multiple: function (a, b) {
    return a ** b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

const h1 = document.querySelector("#logout");
function handleTitleClick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);

const Lform = document.querySelector(".hello");
const input = document.querySelector(".hello input");
const HIDDEN_CLASS = "hidden";
const LOCAL_USER = "current";

function handleLogIn(event) {
  event.preventDefault();
  Lform.classList.toggle(HIDDEN_CLASS);
  const username = input.value;
  localStorage.setItem(LOCAL_USER, username);
  greetings(username);
}

function greetings(username) {
  h1.innerText = `Hello ${username}`;
  h1.classList.toggle(HIDDEN_CLASS);
}

const localcheck = localStorage.getItem(LOCAL_USER);

if (localcheck === null) {
  Lform.classList.toggle(HIDDEN_CLASS);
  Lform.addEventListener("submit", handleLogIn);
} else {
  greetings(localcheck);
}
