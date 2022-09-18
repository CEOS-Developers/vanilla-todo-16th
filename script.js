const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
const doneList = document.getElementById("done-list");

todoForm.addEventListener("submit", submitTodo);

function submitTodo(e) {
  e.preventDefault();
  createTodo(todoInput.value);
  todoInput.value = "";
}

/* 
코드 방식 어떤게 좋을까요.?.?
createTodo() 처럼 변수를 생성하고 해당 변수에 대해 작업을 작성하는게 좋을지,
completeTodo() 처럼 변수 생성을 한번에 하고 작업을 한번에 하는게 좋을지
궁금해서 올려요!
*/

function createTodo(content) {
  const todoSpan = document.createElement("span");
  todoSpan.innerText = content;

  const completeBtn = document.createElement("button");
  completeBtn.innerText = "✅";
  completeBtn.addEventListener("click", completeTodo);

  const newTodoLi = document.createElement("li");
  newTodoLi.append(todoSpan, completeBtn);

  todoList.append(newTodoLi);
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

  returnBtn.innerText = "🆙";
  returnBtn.addEventListener("click", returnTodo);

  doneLi.appendChild(doneSpan);
  doneLi.appendChild(doneBtn);
  doneLi.appendChild(returnBtn);

  doneList.append(doneLi);

  target.remove();
}

function returnTodo(e) {
  const value = e.target.parentElement.querySelector("span").innerText;
  createTodo(value);

  deleteTodo(e);
}

function deleteTodo(e) {
  e.target.parentElement.remove();
}
