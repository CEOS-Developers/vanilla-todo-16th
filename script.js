const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
const doneList = document.getElementById("done-list");

todoForm.addEventListener("submit", submitTodo);

function submitTodo(e) {
  e.preventDefault();

  const todoLi = document.createElement("li");
  const todoSpan = document.createElement("span");
  const deleteBtn = document.createElement("button");

  todoSpan.innerText = todoInput.value;
  todoInput.value = "";

  deleteBtn.innerText = "✅";
  deleteBtn.addEventListener("click", completeTodo);

  todoLi.appendChild(todoSpan);
  todoLi.appendChild(deleteBtn);

  todoList.append(todoLi);
}

function completeTodo(e) {
  const target = e.target.parentElement;

  const doneLi = document.createElement("li");
  const doneSpan = document.createElement("span");
  const doneBtn = document.createElement("button");

  doneSpan.innerText = target.querySelector("span").innerText;
  doneBtn.innerText = "❌";
  doneBtn.addEventListener("click", deleteTodo);

  doneLi.appendChild(doneSpan);
  doneLi.appendChild(doneBtn);

  doneList.append(doneLi);

  target.remove();
}

function deleteTodo(e) {
  e.target.parentElement.remove();
}
