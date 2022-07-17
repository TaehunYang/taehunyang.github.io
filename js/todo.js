const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
let todoArray = [];
const TODOS_KEY = "todos";

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todoArray));
}

function deleteBtn(event) {
  const deleteLi = event.target.parentElement;
  console.log(deleteLi);
  deleteLi.remove();
  todoArray = todoArray.filter((todo) => todo.id !== Number(deleteLi.id));
  saveTodos();
}

function paintToDo(newToDo) {
  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  newSpan.innerText = newToDo.text;
  const newButton = document.createElement("button");
  newButton.innerText = "❌";
  newLi.id = newToDo.id;
  newLi.appendChild(newSpan);
  newLi.appendChild(newButton);
  newButton.addEventListener("click", deleteBtn);
  toDoList.appendChild(newLi);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  todoArray.push(newToDoObj);
  toDoInput.value = "";
  saveTodos();
  paintToDo(newToDoObj);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const paresdToDos = JSON.parse(savedToDos);
  todoArray = paresdToDos;
  paresdToDos.forEach(paintToDo);
}
