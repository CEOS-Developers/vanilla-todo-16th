const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", submitTodo);

function submitTodo(e) {
  e.preventDefault();

  const todoLi = document.createElement("li");
  const todoSpan = document.createElement("span");
  const deleteBtn = document.createElement("button");

  todoSpan.innerText = todoInput.value;
  todoInput.value = "";

  deleteBtn.innerText = "❌";
  deleteBtn.addEventListener("click", deleteTodo);

  todoLi.appendChild(todoSpan);
  todoLi.appendChild(deleteBtn);

  todoList.append(todoLi);
}

function deleteTodo(e) {
  e.target.parentElement.remove();
}
