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
      itemText.innerText = savedItem.text;

      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-button";
      deleteButton.addEventListener("click", removeItem);

      item.appendChild(itemText);
      item.appendChild(deleteButton);

      if (!savedItem.isDone) {
        todoList.appendChild(item);
        // deleteButton.appendChild(todoList);
      } else {
        doneList.appendChild(item);
        //deleteButton.appendChild(item);
      }
    });
  }
};

// 새로운 할 일을 입력 받을 때 로컬 스토리지에 추가한다
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

// isDone의 상태를 반대로 바꿔 준다
const toggleItem = (e) => {
  const itemObject = itemList.find(
    (inputObject) => inputObject.text === e.target.innerText
  );
  itemObject.isDone = !itemObject.isDone;
  localStorage.setItem("itemList", JSON.stringify(itemList)); // 로컬 스토리지 갱신
  renderTodoItem();
};

// 로컬 스토리지에서 값을 삭제한다
const removeItem = (e) => {
  const filteredList = itemList.filter(
    (inputObject) => inputObject.text !== e.target.parentNode.innerText
  );
  localStorage.setItem("itemList", JSON.stringify(filteredList)); // 로컬 스토리지 갱신
  renderTodoItem();
};

window.onload = renderTodoItem();
