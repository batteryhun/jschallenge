const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-input");
const todoInput = document.querySelector("#todo-input input");

let toDos = [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event) {
  const list = event.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id != parseInt(list.id));
  saveTodos();
  list.remove();
}

function paintTodo(newTodo) {
  const checkList = document.createElement("input");
  const checkListLabel = document.createElement("label");
  const button = document.createElement("button");
  checkListLabel.id = newTodo.id;
  checkListLabel.innerText = newTodo.text;
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  checkList.setAttribute("type", "checkbox");
  checkListLabel.setAttribute(
    "style",
    "display:flex; justify-content: space-between"
  );
  todoList.appendChild(checkList);
  todoList.appendChild(checkListLabel);
  checkListLabel.appendChild(button);
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
});

const savedToDos = localStorage.getItem("todos");

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
