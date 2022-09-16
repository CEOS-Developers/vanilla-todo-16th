let itemList = [];

// 로컬 스토리지에서 값을 불러와 화면에 그려 준다
const renderTodoItem = () => {
  const savedTodo = localStorage.getItem("itemList");

  const todoList = document.getElementById("todo-list");
  const doneList = document.getElementById("done-list");

  // 덮어쓰지 않도록 초기화
  todoList.innerHTML = "";
  doneList.innerHTML = "";

  // 데이터가 존재하는지 확인
  if (savedTodo) {
    itemList = JSON.parse(savedTodo);
    itemList.forEach((savedItem) => {
      const item = document.createElement("li");
      const itemText = document.createElement("span");
      itemText.className = "item-text";
      itemText.addEventListener("click", toggleItem);
      const deleteButton = document.createElement("button");

      itemText.innerText = savedItem.text;

      if (!savedItem.isDone) {
        item.appendChild(itemText);
        todoList.appendChild(item);
      } else {
        item.appendChild(itemText);
        doneList.appendChild(item);
      }
    });
  }
};

// 새로운 할 일 입력 받을 때 localStorage에 추가한다
const addTodoList = () => {
  event.preventDefault;
  const inputObject = {
    id: Date.now(),
    text: document.getElementById("input-text").value,
    isDone: false,
  };
  // 중복은 못 받게 해야 하는데...
  itemList = [...itemList, inputObject];
  localStorage.setItem("itemList", JSON.stringify(itemList)); // 로컬 스토리지에 저장
  renderTodoItem();
};

window.onload = renderTodoItem();
