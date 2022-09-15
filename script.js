const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
const doneList = document.getElementById("done-list");

todoForm.addEventListener("submit", submitTodo);

function createTodo(content) {
  const todoLi = document.createElement("li");
  const todoSpan = document.createElement("span");
  const deleteBtn = document.createElement("button");

  todoSpan.innerText = content;

  deleteBtn.innerText = "✅";
  deleteBtn.addEventListener("click", completeTodo);

  todoLi.appendChild(todoSpan);
  todoLi.appendChild(deleteBtn);

  todoList.append(todoLi);
}

function submitTodo(e) {
  e.preventDefault();

  createTodo(todoInput.value);
}

function completeTodo(e) {
  const target = e.target.parentElement;

  const doneLi = document.createElement("li");
  const doneSpan = document.createElement("span");
  const doneBtn = document.createElement("button");
  const returnBtn = document.createElement("button");

  doneSpan.innerText = target.querySelector("span").innerText;
  doneBtn.innerText = "❌";
  doneBtn.addEventListener("click", deleteTodo);
  returnBtn.addEventListener("click", returnTodo);
  returnBtn.innerText = "🆙";
  doneLi.appendChild(doneSpan);
  doneLi.appendChild(doneBtn);
  doneLi.appendChild(returnBtn);

  doneList.append(doneLi);

  target.remove();
}

function returnTodo(e) {
  const value = e.target.parentElement.querySelector("span").innerText;
  deleteTodo(e);
  createTodo(value);
}

function deleteTodo(e) {
  e.target.parentElement.remove();
}
