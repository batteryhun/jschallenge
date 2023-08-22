const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-input");
const todoInput = document.querySelector("#todo-input input");

function paintTodo(newTodo) {
  const checkList = document.createElement("input");
  const checkListLabel = document.createElement("label");
  const checkListSpan = document.createElement("span");
  const button = document.createElement("button");
  checkListLabel.appendChild(checkListSpan);
  checkListLabel.innerText = newTodo;
  checkList.setAttribute("type", "checkbox");
  todoList.appendChild(checkList);
  todoList.appendChild(checkListLabel);
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  paintTodo(newTodo);
});
