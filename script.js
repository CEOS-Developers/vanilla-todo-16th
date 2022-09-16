let todoList = [];
let doneList = [];

// 로컬 스토리지에 있는 값 불러오기
const loadLocalStorage = () => {
  const loadedTodo = localStorage.getItem("todo");
  console.log(loadedTodo);

  // 데이터가 존재하는지 확인
  if (loadedTodo) {
    todoList = JSON.parse(loadedTodo);
    todoList.forEach((loadedItem) => {
      renderTodoItem(loadedItem);
    });
  }
};

// 아이템을 가지고 화면에 그려 준다
const renderTodoItem = (inputItem) => {
  const todos = document.getElementById("todo-list");

  const todoItem = document.createElement("li");
  const todoText = document.createElement("span");
  todoText.className = "todo-text";
  const deleteButton = document.createElement("button");

  todoText.innerText = inputItem;

  todoItem.appendChild(todoText);
  todos.appendChild(todoItem);
};

// 새로운 할 일 입력 받을 때 localStorage에 추가한다
const addTodoList = () => {
  event.preventDefault;
  const inputItem = document.getElementById("input-text").value;
  todoList = [...todoList, inputItem];
  localStorage.setItem("todo", JSON.stringify(todoList)); // 로컬 스토리지에 저장
  loadLocalStorage();
};

window.onload = loadLocalStorage();
