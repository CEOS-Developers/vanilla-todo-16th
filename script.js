const todoForm = document.getElementById("todoForm");
const todoInput = document.querySelector("#todoForm input");
const todoList = document.getElementById("todoList");
const doneList = document.getElementById("doneList");

// 입력한 값 todos에 저장
function makeTodo(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    // 시간으로 텍스트 구분
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }
    showTodo(newTodoObj);
}

//todos 화면에 출력
function showTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    li.appendChild(span);
    li.appendChild(delBtn); 
    todoList.appendChild(li);
}


todoForm.addEventListener("submit", makeTodo);
